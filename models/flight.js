//Require modules
const mongoose = require('mongoose');


//setup shortcut variable
const Schema = mongoose.Schema;

//initialize flight schema
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function(){
            //Creat a date object 
            const date = new Date();
            //Create a variable repping current year
            const year = date.getFullYear();
            //set the current year of the current date object to be the current year + 1
            date.setFullYear(year + 1);
            //return the result
            return date;
        }
    }
}, { timestamps: true });

//export the compilation 

module.exports = mongoose.model('Flight', flightSchema);