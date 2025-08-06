const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String },
  price: { type: String, required: true },
  weight: { type: String },
  description: { type: String },
  benefits: [{ type: String }],
  tags: [{ type: String }],
  icon: { type: String },
  stock: { type: Number, default: 0 },
  category: { type: String },
});

module.exports = mongoose.model('Product', productSchema);