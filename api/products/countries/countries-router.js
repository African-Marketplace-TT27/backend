const router = require('express').Router();
const Countries = require('./countries-model');

router.get('/', (req, res) => {
  Countries.find(req.query)
    .then((countries) => {
      res.status(200).json(countries || []);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving countries' });
    });
});

router.get('/:id', (req, res) => {
  Countries.findById(req.params.id)
    .then((country) => {
      if (country) {
        res.status(200).json(country);
      } else {
        res.status(404).json({ message: 'Error country not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving country' });
    });
});

router.post('/', (req, res) => {
  Countries.add(req.body, req.params)
    .then((country) => {
      if (!req.body.country_name) {
        res.status(400).json({ message: 'country required' });
      } else {
        res.status(201).json(country);
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error adding country' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Countries.findById(id)
    .then((country) => {
      if (country) {
        return Countries.update(changes, id);
      } else {
        res.status(404).json({ message: 'Could not find country' });
      }
    })
    .then((updatedCountry) => {
      res.json(updatedCountry);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to country type' });
    });
});
router.delete('/:id', (req, res) => {
  Countries.remove(req.params.id)
    .then((country) => {
      if (country) {
        res.status(200).json({ message: 'country deleted' });
      } else {
        res.status(404).json({ message: 'country not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error deleting country' });
    });
});

module.exports = router;
