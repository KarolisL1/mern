const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String },
}, { timestamps: true });
const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;