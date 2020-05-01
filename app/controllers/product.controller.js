const Products = require('../models/product.model.js');

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  Products.find()
    .then(product => {
      res.send(product);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving products."
      })
    })
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
  Products.findById(req.params.productId)
    .then(product => {
      if (!product) {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId
        });
      }
      res.send(product);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId
        })
      }
      return res.status(500).send({
        message: "Error retrieving product with id " + req.params.productId
      })
    })
};

exports.sendWorkbook = (workbook, response) => {
  var fileName = 'FileName.xlsx';

  response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  response.setHeader("Content-Disposition", "attachment; filename=" + fileName);

  workbook.xlsx.write(response).then(function() {
    response.end();
  });
}