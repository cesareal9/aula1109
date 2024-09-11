const pet = require('../models/pet_models.js');

exports.createpet = async (req, res) => {
  try {
    const pet = new pet(req.body);
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pet' });
  }
};

exports.getpets = async (req, res) => {
  try {
    const pets = await pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar pets' });
  }
};

exports.getpetById = async (req, res) => {
  try {
    const pet = await pet.findById(req.params.id);
    res.status(200).json(pet);
  } catch (error) {
    res.status(404).json({ error: 'pet não encontrado' });
  }
};


//{ new: true } retorna o novo documento atualizado
exports.updatepet = async (req, res) => {
  try {
    const pet = await pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(pet);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar pet' });
  }
};

exports.deletepet = async (req, res) => {
  try {
    await pet.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar pet' });
  }
};