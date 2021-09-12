const express = require('express');
const { getAllProducts, getProductById, getBrands, getTopNewProducts, getTopLaroche } = require('../controllers/productControllers');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/brands', getBrands);
router.get('/topnewproducts', getTopNewProducts);
router.get('/topLaroche', getTopLaroche);
router.get('/:id', getProductById);

module.exports = router;
