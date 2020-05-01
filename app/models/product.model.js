const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  title: String,
  price: String,
  description: String,
  size: String,
  color: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Products', ProductSchema);