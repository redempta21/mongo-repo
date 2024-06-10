const express = require('express');
const router = express.Router();
const itemController = require ('../Controllers/itemController');

router.post('/items',itemController.createItem);
router.get('/items', itemController.getItems);
router.put('/item/:id',itemController.updateItemById);
router.delete('/item/:id', itemController.deleteItemById);

module.exports = router;