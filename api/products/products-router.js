const router = require('express').Router();
const Products = require('./products-model');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'up' });
});

module.exports = router;
