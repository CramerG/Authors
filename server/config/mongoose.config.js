const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Database Connection Established") )
    .catch( er => console.log("Error Connecting to Database: ", err) );