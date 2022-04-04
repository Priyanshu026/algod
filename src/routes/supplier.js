const express = require("express");
const router = express.Router();
const SupplierController = require('../controllers/supplier.controller');

// Create routes for user here
router.post('/addSupplier', SupplierController.addSupplier); 
router.post('/addProductsbySupplier', SupplierController.addProductsbySupplier);
router.post('/getSupplier', SupplierController.getSupplier); 
router.post('/removeProductsbySupplier', SupplierController.removeProductsbySupplier); 
// router.get('/topic', TopicController.getTopic);
// router.get('/topic/:topicId', TopicController.getSingleTopic);
// router.delete('/topic/:topicId', TopicController.deleteTopic);
module.exports = router;