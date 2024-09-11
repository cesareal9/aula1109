const pet = require('../models/pet.js');

const store = (req, res) => {
    pet.create(req.body);
    res.json();
};

const index = (req, res) => {
    const content = pet.find().exec();
    res.json(content);
};

const show = (req, rest) => {
    const content = pet.findById(req.params.id).exec();
    res.json(content);
};

const update = (req, res) => {
    pet.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
};

const destroy = (req, res) => {
    pet.findByIdAndDelete(req.params.id).exec();
    res.json();
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
};