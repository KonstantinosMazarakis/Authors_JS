const AuthorController = require("../controllers/authors.controller")

module.exports = (app) =>{
    app.get('/api/Authors',AuthorController.findAllAuthors)
    app.post('/api/Authors', AuthorController.createAuthor)
    app.get('/api/Authors/:id', AuthorController.findOneAuthor)
    app.put('/api/Authors/:id', AuthorController.updateOneAuthor)
    app.delete('/api/Authors/:id', AuthorController.deleteAuthor)
}