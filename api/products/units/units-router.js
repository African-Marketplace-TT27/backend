const router = require('express').Router();
const Units = require('./units-model');

router.get('/', (req, res) => {
  Units.find(req.query)
    .then((units) => {
      res.status(200).json(units || []);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving units' });
    });
});

router.get('/:id', (req, res) => {
  Units.findById(req.params.id)
    .then((unit) => {
      if (unit) {
        res.status(200).json(unit);
      } else {
        res.status(404).json({ message: 'Error unit not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving unit' });
    });
});

router.post('/', (req, res) => {
  Units.add(req.body, req.params)
    .then((unit) => {
      if (!req.body.unit_name) {
        res.status(400).json({ message: 'unit required' });
      } else {
        res.status(201).json(unit);
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error adding unit' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Units.findById(id)
    .then((unit) => {
      if (unit) {
        return Units.update(changes, id);
      } else {
        res.status(404).json({ message: 'Could not find unit' });
      }
    })
    .then((updatedUnit) => {
      res.json(updatedUnit);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to update unit' });
    });
});
router.delete('/:id', (req, res) => {
  Units.remove(req.params.id)
    .then((unit) => {
      if (unit) {
        res.status(200).json({ message: 'unit deleted' });
      } else {
        res.status(404).json({ message: 'unit not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error deleting unit' });
    });
});

module.exports = router;
