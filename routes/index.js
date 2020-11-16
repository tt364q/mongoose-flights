const express = require('express');


// Create router object
const router = express.Router();
// require controller module to map requests to
const indexCtrl = require('../controllers/index');

// define our routes


// GET "/" ->> give me the homepage
router.get('/', indexCtrl.index);
//export our router object
module.exports = router;