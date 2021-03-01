const router = require('express').Router();
const Products = require('./products-model');

router.get('/', (req, res) => {
  Products.findProducts(req.query)
    .then((products) => {
      res.status(200).json(products || []);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving products' });
    });
});

router.get('/:id', (req, res) => {
  Products.get(req.params.id)
    .then((product) => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Error product not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving product' });
    });
});

router.post('/', (req, res) => {
  Products.addProduct(req.body, req.params)
    .then((product) => {
      if (!req.body.prodName || !req.body.prodDesc) {
        res
          .status(400)
          .json({ message: 'Product name and description required' });
      } else {
        res.status(201).json(product);
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error adding product' });
    });
});

router.put('/:id', (req, res) => {
  Products.update(req.params.id, req.body)
    .then((product) => {
      if (!req.body.prodName || !req.body.prodDesc) {
        res
          .status(400)
          .json({ message: 'Product name and description required' });
      } else {
        res.status(201).json(product);
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error updating product' });
    });
});

router.delete('/:id', (req, res) => {
  Products.remove(req.params.id)
    .then((actions) => {
      if (actions) {
        res.status(200).json({ message: 'Product deleted' });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error deleting product' });
    });
});

module.exports = router;
