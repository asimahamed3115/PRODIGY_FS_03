const express = require('express');
const router = express.Router();
const users = [];

router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'));

router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  req.session.user = username;
  res.redirect('/home');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    req.session.user = username;
    res.redirect('/home');
  } else {
    res.send("Invalid credentials");
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;