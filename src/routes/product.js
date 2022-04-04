const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/product.controller');

// Create routes for product here
router.post('/addProduct', ProductController.addProduct);
router.post('/updateProduct', ProductController.updateproduct); 
router.get('/search/', ProductController.search); 
module.exports = router;