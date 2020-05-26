const Author = require("../models/author.model");

module.exports.addAuthor = (req, res) => {
    const {name} = req.body;
    Author.create({name})
        .then(newAuthor => res.json( {author: newAuthor} ))
        .catch(err => res.status(400).json(err));
};

module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json({message: "Error finding all authors: ", error: err}));
};

module.exports.findAuthorById = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json({message: "Error finding author by Id: ", error: err}));
};

module.exports.deleteAuthor = (req, res) => {
    Author.findOneAndDelete({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json({message: "Error deleting author: ", error: err}))
}

module.exports.updateAuthor = (req, res) => {
    Author.updateOne({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
};