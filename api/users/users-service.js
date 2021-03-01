module.exports = {
  isValid,
};

const isValid = (user) => {
  return Boolean(
    user.email && user.password && typeof user.password === 'string'
  );
};
