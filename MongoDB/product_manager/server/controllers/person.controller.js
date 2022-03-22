const Person = require('../models/person.model');

module.exports.getPeople = (request, response) => {
    Person.find()
        .then(people => {
            response.json({results: people});
        })
        .catch(err => {
            response.json(err);
        })
}

module.exports.createPerson = (request, response) => {
    const { title, price, description } = request.body;
    Person.create({
        title,
        price,
        description
    })
        .then(person => {
            response.json({results:person})
        })
        .catch(err => {
            response.json({message: "Something is wrong", error: err});
        });
}

module.exports.getOnePerson = (req, response) => {
    // const { _id } = request.params.id;
    Person.findById({_id: req.params.id})
        .then(onePerson => {
            response.json({results: onePerson});
        })
        .catch(err => {
            response.json(err);
        })
}

module.exports.updatePerson = (request, response) => {
    const { title, price, description } = request.body;
    Person.findByIdAndUpdate({_id: request.params.id}, request.body , {new: true})
        .then(updatedPerson => {
            response.json({results: updatedPerson});
        })
        .catch(err => {
            response.json(err);
        })
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}