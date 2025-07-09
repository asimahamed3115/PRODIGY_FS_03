const express = require('express');
const router = express.Router();

const products = [
  { name: 'Product 1', price: 1000, description: 'Sample item', image: 'images/product1.jpg' },
  { name: 'Product 2', price: 1500, description: 'Another sample item', image: 'images/product2.jpg' }
];

router.get('/list', (req, res) => res.json(products));
router.get('/home', (req, res) => res.render('home', { products }));

module.exports = router;