const { Router } = require('express');
const { generateToken } = require('../utils/jwt.utils');

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  //TODO validación y autenticación del cliente en db
  // const { role } = await User.findOne({ email });

  // const userToken = {
  //   email,
  //   role
  // };

  const token = generateToken(userToken);

  // res.json({ message: 'Usuario inicia sesión', token });
  res
    .cookie('authToken', token, { maxAge: 60000, httpOnly: true })
    .json({ message: 'Sesión iniciada' });
});

module.exports = router;
