
const express = require('express');
const router = express.Router();
const {getAllProducts,editProduct,filterProductsByPrice,searchProductsByName,addProduct,getProductById} = require('../controller/productController');

// Get all products
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
// Edit a product
router.put('/products/:id',editProduct);

// Filter products by price range
router.get('/products/filter',filterProductsByPrice);

// Search products by name
router.get('/products/search',searchProductsByName);
router.post('/products/add',addProduct);

module.exports = router;
// var x, y 
