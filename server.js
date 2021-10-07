// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const gBank = require("./models/gBank.js");
const methodOverride = require("method-override");
const app = express();
require('dotenv').config();
// MIDDLEWARE
// Body parser middleware: give us acces to req.body
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));






// ROUTES/ CONTROLLERS
const gController = require("./controls/gBankC.js");
app.use("/", gController);







// LISTENER
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`This server works on port: ${PORT}`)
});