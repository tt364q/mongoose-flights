//Require modules
const mongoose = require('mongoose');

//Create shortcut variable
const db = mongoose.connection;
const connectionURI = 'mongodb+srv://admin:Tejano05@cluster0.d7hcz.mongodb.net/mongoose-flights?retryWrites=true&w=majority';

// Connect to DB
mongoose.connect(connectionURI, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
});
//List for connection event

db.on('connected', function(){
    console.log(`Connected to MongoDb on ${db.host}:${db.port}`);
});