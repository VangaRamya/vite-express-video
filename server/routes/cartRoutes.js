const express = require('express');
const router = express.Router();
const { getCart, addToCart, updateCartItem, removeCartItem } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getCart);
router.post('/', authMiddleware, addToCart);
router.put('/:itemId', authMiddleware, updateCartItem);
router.delete('/:itemId', authMiddleware, removeCartItem);

module.exports = router;