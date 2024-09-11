const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  telefones: [String],
});

const pet = mongoose.model('pet', petSchema);
module.exports = pet;