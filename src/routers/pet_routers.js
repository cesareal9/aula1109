const express = require('express');
const router = express.Router();
const pet_controller = require('../controllers/pet_controller.js');

router.post('/', pet_controller.createCliente);
router.get('/', pet_controller.getClientes);
router.get('/:id', pet_controller.getClienteById);
router.put('/:id', pet_controller.updateCliente);
router.delete('/:id', pet_controller.deleteCliente);

module.exports = router;