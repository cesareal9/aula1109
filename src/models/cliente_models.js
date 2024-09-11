const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  telefones: [String],
});

const cliente = mongoose.model('cliente', clienteSchema);
module.exports = cliente;