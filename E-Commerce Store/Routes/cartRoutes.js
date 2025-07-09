const express = require('express');
const router = express.Router();
let orders = [];

router.get('/', (req, res) => {
  res.render('cart', { cart: req.session.cart || [] });
});

router.post('/add', (req, res) => {
  const product = req.body;
  if (!req.session.cart) req.session.cart = [];
  req.session.cart.push(product);
  res.redirect('/cart');
});

router.get('/orders', (req, res) => {
  res.render('orders', { orders });
});

router.post('/place', (req, res) => {
  if (req.session.cart) {
    orders.push({ user: req.session.user, items: req.session.cart });
    req.session.cart = [];
  }
  res.redirect('/orders');
});

module.exports = router;