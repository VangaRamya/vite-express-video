const Order = require('../models/Order');
const Cart = require('../models/Cart');

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('items.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders', error: err.message });
  }
};

const placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart is empty' });
    const total = cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const order = await Order.create({
      user: req.user._id,
      items: cart.items.map(item => ({ product: item.product._id, quantity: item.quantity })),
      total,
      status: 'pending',
    });
    cart.items = [];
    await cart.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Failed to place order', error: err.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.product');
    if (!order || !order.user.equals(req.user._id)) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch order', error: err.message });
  }
};

const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order || !order.user.equals(req.user._id)) return res.status(404).json({ message: 'Order not found' });
    if (order.status === 'cancelled') return res.status(400).json({ message: 'Order already cancelled' });
    order.status = 'cancelled';
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Failed to cancel order', error: err.message });
  }
};

module.exports = { getOrders, placeOrder, getOrderById, cancelOrder };