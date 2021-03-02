const checkPayload = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.status(401).json('email and password required');
  } else {
    next();
  }
};

module.exports = {
  checkPayload,
};
