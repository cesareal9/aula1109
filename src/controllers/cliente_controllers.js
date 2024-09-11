const cliente = require('../models/cliente_models.js');

exports.createcliente = async (req, res) => {
  try {
    const cliente = new cliente(req.body);
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar cliente' });
  }
};

exports.getclientes = async (req, res) => {
  try {
    const clientes = await cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar clientes' });
  }
};

exports.getclienteById = async (req, res) => {
  try {
    const cliente = await cliente.findById(req.params.id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(404).json({ error: 'cliente não encontrado' });
  }
};


//{ new: true } retorna o novo documento atualizado
exports.updatecliente = async (req, res) => {
  try {
    const cliente = await cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar cliente' });
  }
};

exports.deletecliente = async (req, res) => {
  try {
    await cliente.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar cliente' });
  }
};