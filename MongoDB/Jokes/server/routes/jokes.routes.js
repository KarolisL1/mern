const JokeController = require('../controllers/jokes.controller');

module.exports = (app) => {
    //app.get('/api/jokes', JokeController.helloWord);
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/random', JokeController.getRandomJoke);
    app.get('/api/jokes/:id', JokeController.getOneJoke);
    app.post('/api/jokes/new', JokeController.createJoke);
    app.put('/api/jokes/update/:id', JokeController.updateOneJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteOneJoke);
}