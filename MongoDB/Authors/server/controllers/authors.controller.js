const AuthorModel = require('../models/authors.model');

module.exports.findAllAuthors = (req, res) => {
    AuthorModel.find()
        .then(allAuthors => {
            res.json({results: allAuthors});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

module.exports.createAuthor = (req, res) => {
    AuthorModel.create(req.body)
        .then(newAuthor => {
            res.json({results: newAuthor});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

module.exports.getOneAuthor = (req, res) => {
    AuthorModel.findById({_id: req.params.id})
        .then(oneAuthor => {
            res.json({results: oneAuthor});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

// module.exports.getRandomAuthor = (req, res) => {
//     AuthorModel.find()
//     .then(randomAuthor => {
//         let a = Math.floor(Math.random() * randomAuthor.length)
//         res.json({results: randomAuthor[a]});
//     })
//     .catch(err => {
//         res.json({message: "Something is wrong", error: err});
//     });
// }

module.exports.updateOneAuthor = (req, res) => {
    AuthorModel.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true})
        .then(updatedAuthor => {
            res.json({results: updatedAuthor});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

module.exports.deleteOneAuthor = (req, res) => {
    AuthorModel.deleteOne({_id: req.params.id})
        .then(deletedAuthor => {
            res.json({results: deletedAuthor});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}