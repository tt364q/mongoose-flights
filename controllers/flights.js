const Flight = require('../models/flight');




function newFlight(req, res){
    res.render('flights/new');
}
function create(req, res){
    // sanitize our data from req.body

    // create flight object
    const flight = new Flight(req.body);
    flight.save(function(err){
        console.log(flight)
        // after flight created, we will redirect
        res.redirect('/flights/new');
    })

}

function index(req,res){
    // query the (database) for all the flights
    Flight.find({}, function(err, flights){
        // render a template to show all flights
        res.render('flights/index', { flights })
    });
}
module.exports = {
    new: newFlight,
    create,
    index
};