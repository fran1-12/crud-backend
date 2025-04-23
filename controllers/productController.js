const Product = require("../models/productModel");
const { v4: uuidv4 } = require("uuid");

exports.getAllProducts = (req, res) => {
  const products = Product.findAll();
  res.json({ success: true, data: products });
};

exports.getProductById = (req, res) => {
  const product = Product.findById(req.params.id);
  if (product) {
    res.json({ success: true, data: product });
  } else {
    res.status(404).json({ success: false, message: "Product not found" });
  }
};

exports.createProduct = (req, res) => {
  const newProduct = { id: uuidv4(), name: req.body.name };
  Product.create(newProduct);
  res.status(201).json({ success: true, data: newProduct });
};

exports.updateProduct = (req, res) => {
  const updated = Product.update(req.params.id, req.body);
  if (updated) {
    res.json({ success: true, message: "Product updated" });
  } else {
    res.status(404).json({ success: false, message: "Product not found" });
  }
};

exports.deleteProduct = (req, res) => {
  Product.delete(req.params.id);
  res.json({ success: true, message: "Product deleted" });
};