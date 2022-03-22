const JokeModel = require('../models/jokes.model');

module.exports.helloWord = (req, res) => {
    res.json('Hello World');
}

module.exports.findAllJokes = (req, res) => {
    JokeModel.find()
        .then(allJokes => {
            res.json({results: allJokes});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

module.exports.createJoke = (req, res) => {
    JokeModel.create(req.body)
        .then(newJoke => {
            res.json({results: newJoke});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

module.exports.getOneJoke = (req, res) => {
    JokeModel.findById({_id: req.params.id})
        .then(oneJoke => {
            res.json({results: oneJoke});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

module.exports.getRandomJoke = (req, res) => {
    JokeModel.find()
    .then(randomJoke => {
        let a = Math.floor(Math.random() * randomJoke.length)
        res.json({results: randomJoke[a]});
    })
    .catch(err => {
        res.json({message: "Something is wrong", error: err});
    });
}

module.exports.updateOneJoke = (req, res) => {
    JokeModel.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true})
        .then(updatedJoke => {
            res.json({results: updatedJoke});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

module.exports.deleteOneJoke = (req, res) => {
    JokeModel.deleteOne({_id: req.params.id})
        .then(deletedJoke => {
            res.json({results: deletedJoke});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}