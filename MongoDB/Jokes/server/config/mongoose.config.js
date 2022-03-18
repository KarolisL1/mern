//connect to mongodb using mongoose 
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@first.i1swc.mongodb.net/Jokes_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));