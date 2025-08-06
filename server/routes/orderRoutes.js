const express = require('express');
const router = express.Router();
const { getOrders, placeOrder, getOrderById, cancelOrder } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getOrders);
router.post('/', authMiddleware, placeOrder);
router.get('/:id', authMiddleware, getOrderById);
router.put('/:id/cancel', authMiddleware, cancelOrder);

module.exports = router;