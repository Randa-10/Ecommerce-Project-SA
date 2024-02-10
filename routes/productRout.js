
const express = require('express');
const router = express.Router();
    
const {getAllProducts,editProduct,filterProductsByPrice,searchProductsByName,addProduct,getProductById,filterProductsByCategory,getCategories,addCommentToProduct,getAllCommentsForProduct} = require('../controller/productController');

// Get all products
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
// Edit a product
router.put('/products/:id',editProduct);

// Filter products by price range
router.get('/products/filter',filterProductsByPrice);

// categories
router.get('/categories',getCategories);
router.post('/products/filterWithCat',filterProductsByCategory);

// Search products by name
router.post('/products/search',searchProductsByName);
router.post('/products/add',addProduct);


//comments
router.post('/:productId/comments', addCommentToProduct);
router.get('/products/:productId/comments', getAllCommentsForProduct);

module.exports = router;
// var x, y 
