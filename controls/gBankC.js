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
		console.log(allGs)
		res.render('index.ejs', {
			gData: allGs,});
	});
});




// Routes / Controllers
// New
gRouter.get('/new', (req, res) => {
	res.send('new.ejs');
});




// DELETE
gRouter.delete("/:id", (req, res) => {
	res.send("deleting...")
  })




// Create
gRouter.post('/', (req, res) => {
	gBank.create(req.body, (error, createdG) => {
		res.redirect('/');
	});
});





// Show
gRouter.get('/:id', (req, res) => {
	gBank.findById(req.params.id, (err, foundBook) => {
		res.send(foundBook);
	});
});














// export functionality
module.exports = gRouter;