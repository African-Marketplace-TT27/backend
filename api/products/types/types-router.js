const router = require('express').Router();
const Types = require('./types-model');

router.get('/', (req, res) => {
  Types.find(req.query)
    .then((types) => {
      res.status(200).json(types || []);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving types' });
    });
});

router.get('/:id', (req, res) => {
  Types.findById(req.params.id)
    .then((type) => {
      if (type) {
        res.status(200).json(type);
      } else {
        res.status(404).json({ message: 'Error type not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving type' });
    });
});

router.post('/', (req, res) => {
  Types.add(req.body, req.params)
    .then((type) => {
      if (!req.body.type_name) {
        res.status(400).json({ message: 'type required' });
      } else {
        res.status(201).json(type);
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error adding type' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Types.findById(id)
    .then((type) => {
      if (type) {
        return Types.update(changes, id);
      } else {
        res.status(404).json({ message: 'Could not find type' });
      }
    })
    .then((updatedType) => {
      res.json(updatedType);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to update type' });
    });
});
router.delete('/:id', (req, res) => {
  Types.remove(req.params.id)
    .then((type) => {
      if (type) {
        res.status(200).json({ message: 'type deleted' });
      } else {
        res.status(404).json({ message: 'type not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error deleting type' });
    });
});

module.exports = router;
