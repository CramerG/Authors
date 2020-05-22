const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author's Name Required"],
        minlength: [3, "Author's Name Must Be At Least 3 Characters"]
    }
})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;