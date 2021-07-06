const express = require('express');
const { getAllProducts, getProductById, getBrands } = require('../controllers/productControllers');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/brands', getBrands);
router.get('/:id', getProductById);

module.exports = router;
