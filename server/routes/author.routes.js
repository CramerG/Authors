const AuthorController = require("../controller/author.controller");

module.exports = app => {
    app.post("/api/authors", AuthorController.addAuthor);
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.get("/api/authors/:id", AuthorController.findAuthorById);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}