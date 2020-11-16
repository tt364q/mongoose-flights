// require the model (optional)

// Set up our module.exports so we can export function
module.exports = {
    index
};

// define our controller actions (functions) router middleware
function index(req, res) {
    res.render('index');
}