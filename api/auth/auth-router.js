const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secrets');

const User = require('../users/users-model');
const { isValid } = require('../users/users-service');
const { checkPayload } = require('../middleware/checkPayload');
const { checkEmailUnique } = require('../middleware/checkEmailUnique');

router.post('/register', checkPayload, checkEmailUnique, (req, res) => {
  const credentials = req.body;
  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 11;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;

    User.add(credentials)
      .then((user) => {
        res
          .status(201)
          .json({ data: user, message: 'successfully registered' });
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: 'credentials required' });
  }
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (isValid(req.body)) {
    User.findBy({ email: email })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = makeToken(user);
          res.status(200).json({
            message: `welcome, ${user.name}`,
            name: user.name,
            email: user.email,
            country: user.country_id,
            token,
          });
        } else {
          res.status(401).json('invalid credentials');
        }
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } else {
    res.status(400).json('email and password required');
  }
});

function makeToken(user) {
  const payload = {
    subject: user.id,
    email: user.email,
  };
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
