const User = require('../users/users-model');

const checkEmailUnique = async (req, res, next) => {
  try {
    const rows = await User.findBy({ email: req.body.email });
    if (!rows.length) {
      next();
    } else {
      res.status(401).json('email taken');
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  checkEmailUnique,
};
