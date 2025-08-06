const express = require('express');
const router = express.Router();
const { getAllUsers, getAllOrders, getDashboardMetrics } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/users', authMiddleware, roleMiddleware('admin'), getAllUsers);
router.get('/orders', authMiddleware, roleMiddleware('admin'), getAllOrders);
router.get('/dashboard', authMiddleware, roleMiddleware('admin'), getDashboardMetrics);

module.exports = router;