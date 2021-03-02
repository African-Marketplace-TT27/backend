const router = require('express').Router();
const Products = require('./products-model');

router.get('/', (req, res) => {
  Products.find(req.query)
    .then((products) => {
      res.status(200).json(products || []);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving products' });
    });
});

router.get('/:id', (req, res) => {
  Products.findById(req.params.id)
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
  Products.add(req.body, req.params)
    .then((product) => {
      if (!req.body.prod_name || !req.body.prod_desc) {
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
  const { id } = req.params;
  const changes = req.body;

  Products.findById(id)
    .then((product) => {
      if (product) {
        return Products.update(changes, id);
      } else {
        res.status(404).json({ message: 'Could not find product' });
      }
    })
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to update product' });
    });
});
router.delete('/:id', (req, res) => {
  Products.remove(req.params.id)
    .then((product) => {
      if (product) {
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
