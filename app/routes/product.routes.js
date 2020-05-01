module.exports = (app) => {
  const products = require('../controllers/product.controller.js');

  // Retrieve all Products
  app.get('/api/products', products.findAll);

  // Retrieve a single Product with productId
  app.get('/api/products/:productId', products.findOne);
}