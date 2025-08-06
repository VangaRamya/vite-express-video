const User = require('../models/User');
const Order = require('../models/Order');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'username email');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders', error: err.message });
  }
};

const getDashboardMetrics = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const orderCount = await Order.countDocuments();
    const totalRevenue = (await Order.find({ status: 'completed' })).reduce((sum, o) => sum + o.total, 0);
    res.json({ userCount, orderCount, totalRevenue });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch dashboard metrics', error: err.message });
  }
};

module.exports = { getAllUsers, getAllOrders, getDashboardMetrics };