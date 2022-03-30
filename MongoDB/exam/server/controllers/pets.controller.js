const PetModel = require('../models/pets.model');

module.exports.findAllPets = (req, res) => {
    PetModel.find()
        .then(allPets => {
            res.json({results: allPets});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

module.exports.createPet = (req, res) => {
    PetModel.create(req.body)
        .then(newPet => {
            res.json({results: newPet});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

module.exports.getOnePet = (req, res) => {
    PetModel.findById({_id: req.params.id})
        .then(onePet => {
            res.json({results: onePet});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

// module.exports.getRandomPet = (req, res) => {
//     PetModel.find()
//     .then(randomPet => {
//         let a = Math.floor(Math.random() * randomPet.length)
//         res.json({results: randomPet[a]});
//     })
//     .catch(err => {
//         res.json({message: "Something is wrong", error: err});
//     });
// }

module.exports.updateOnePet = (req, res) => {
    PetModel.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true})
        .then(updatedPet => {
            res.json({results: updatedPet});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}

module.exports.deleteOnePet = (req, res) => {
    PetModel.deleteOne({_id: req.params.id})
        .then(deletedPet => {
            res.json({results: deletedPet});
        })
        .catch(err => {
            res.json({message: "Something is wrong", error: err});
        });
}