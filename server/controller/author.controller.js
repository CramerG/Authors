const Author = require("../models/author.model");

module.exports.addAuthor = (req, res) => {
    const {name} = req.body;
    Author.create({name})
        .then(newAuthor => res.json( {author: newAuthor} ))
        .catch(err => res.json( {message: "Error adding new author", error: err} ));
};

module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json({message: "Error finding all authors", error: err}));
};