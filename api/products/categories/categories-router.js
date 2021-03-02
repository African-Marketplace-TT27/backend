const router = require('express').Router();
const Categories = require('./categories-model');

router.get('/', (req, res) => {
  Categories.find(req.query)
    .then((categories) => {
      res.status(200).json(categories || []);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving categories' });
    });
});

router.get('/:id', (req, res) => {
  Categories.findById(req.params.id)
    .then((category) => {
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ message: 'Error category not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving category' });
    });
});

router.post('/', (req, res) => {
  Categories.add(req.body, req.params)
    .then((category) => {
      if (!req.body.category_name) {
        res.status(400).json({ message: 'Category required' });
      } else {
        res.status(201).json(category);
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error adding category' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Categories.findById(id)
    .then((category) => {
      if (category) {
        return Categories.update(changes, id);
      } else {
        res.status(404).json({ message: 'Could not find category' });
      }
    })
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to update category' });
    });
});

router.delete('/:id', (req, res) => {
  Categories.remove(req.params.id)
    .then((category) => {
      if (category) {
        res.status(200).json({ message: 'category deleted' });
      } else {
        res.status(404).json({ message: 'category not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error deleting category' });
    });
});

module.exports = router;
