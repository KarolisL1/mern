const PetController = require('../controllers/pets.controller');

module.exports = (app) => {
    app.get('/api/pets', PetController.findAllPets);
    // app.get('/api/pets/random', PetController.getRandomPet);
    app.post('/api/pets/new', PetController.createPet);
    app.get('/api/pets/:id', PetController.getOnePet);
    app.put('/api/pets/:id/edit', PetController.updateOnePet);
    app.delete('/api/pets/delete/:id', PetController.deleteOnePet);
}