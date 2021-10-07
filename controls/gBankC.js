// requiere dependencies  
const express = require('express');
const gRouter = express.Router();
const gBank = require('../models/gBank.js');
const methodOverride = require("method-override")



// Middleware
// Body parser middleware: give us access to req.body
gRouter.use(express.urlencoded({ extended: true }));
gRouter.use(methodOverride("_method"))





//ROUTES
// // INDEX
// gRouter.get('/', (req, res)=>{
//     res.render("index.ejs", {allG: gBank});
    
// });



// Index
// Index
gRouter.get('/', (req, res) => {
	gBank.find({}, (error, allGs) => {
		res.render('index.ejs', {
			gData: allGs,});
	});
});




// Routes / Controllers
// New
gRouter.get('/new', (req, res) => {
	res.render('new.ejs');
});




  // Delete
gRouter.delete("/:id", (req, res) => {
	gBank.findByIdAndRemove(req.params.id, (err, data) => {
	  res.redirect("/")
	})
  })

  gRouter.put("/:id", (req, res) => {  
	gBank.findByIdAndUpdate(
	  req.params.id,
	  req.body,
	  {
		new: true,
	  },
	  (error, updatedBook) => {
		res.redirect(`/${req.params.id}`)
	  }
	)
  })








// Create
gRouter.post('/', (req, res) => {
	gBank.create(req.body, (error, createdG) => {
		res.redirect('/');
	});
});



// Edit
gRouter.get("/:id/edit", (req, res) => {
	gBank.findById(req.params.id, (error, foundBook) => {
	  res.render("edit.ejs", {
		gData: foundBook,
	  })
	})
  })



// Show
gRouter.get('/:id', (req, res) => {
	gBank.findById(req.params.id, (err, foundBook) => {
		res.render('show.ejs', {
			book: foundBook,
		});
	});
});













// export functionality
module.exports = gRouter;