const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Title is required'], minlength: [3, 'Title must be at least 3 characters'] },
    price: { type: Number, required: [true, 'Price is required'], min: [0, 'Price must be at least 0'] },
    description: { type: String, required: [true, 'Description is required'], minlength: [3, 'Description must be at least 3 characters'] }
}, { timestamps: true });
const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;