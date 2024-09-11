const cliente = require('../models/cliente.js');

const store = (req, res) => {
    cliente.create(req.body);
    res.json();
};

const index = (req, res) => {
    const content = cliente.find().exec();
    res.json(content);
};

const show = (req, rest) => {
    const content = cliente.findById(req.params.id).exec();
    res.json(content);
};

const update = (req, res) => {
    cliente.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
};

const destroy = (req, res) => {
    cliente.findByIdAndDelete(req.params.id).exec();
    res.json();
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
};