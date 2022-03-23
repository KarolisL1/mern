const AuthorController = require('../controllers/authors.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    // app.get('/api/Authors/random', AuthorController.getRandomAuthor);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.getOneAuthor);
    app.put('/api/authors/edit/:id', AuthorController.updateOneAuthor);
    app.delete('/api/authors/delete/:id', AuthorController.deleteOneAuthor);
}