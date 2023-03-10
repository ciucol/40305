const { Router } = require('express');
const passport = require('passport');
const authorization = require('../middlewares/authorization.middleware');
const { authToken } = require('../utils/jwt.utils');
const passportCall = require('../utils/passportCall.utils');

const router = Router();

router.get(
  '/private',
  passportCall('jwt'),
  authorization('admin'),
  (req, res) => {
    res.json({ message: 'Esto es privado!!!!' });
  }
);

module.exports = router;
