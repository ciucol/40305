const { Router } = require('express');
const passport = require('passport');
const User = require('../models/user.model');
const { createHash } = require('../utils/cryptPassword');

const router = Router();

router.post(
  '/',
  passport.authenticate('register', { failureRedirect: '/failRegister' }),
  async (req, res) => {
    try {
      res.json({ message: 'Usuario registrado' });
    } catch (error) {
      console.log(error);
      if (error.code === 11000)
        return res.status(400).json({ error: 'El usuario ya existe' });
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
);

router.get('/failRegister', async (req, res) => {
  console.log('Falló el registro');
  res.json({ error: 'Falló' });
});

module.exports = router;
