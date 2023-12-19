const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

//All the routers are created below
router.post('/create', productsController.createProduct);
router.get('/', productsController.listProducts);
router.delete('/:id', productsController.deleteProduct);
router.post('/:id/update_quantity', productsController.updateQuantity);

module.exports = router;
