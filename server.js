//Require our modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

//router modules
const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');
// create the express app
const app = express();
//configure server settings 
app.set('view engine', 'ejs');

// require the db config module 
require('./config/database');

// mount middlewarejkjk
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
// mount routes 
app.use('/', indexRouter)
app.use('/flights', flightsRouter);

const port = 3000;
// tell app to listen
app.listen(port, function(){
    console.log(`Express is listeingin on ${port}`)
})