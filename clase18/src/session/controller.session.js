const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  if (req.session.counter) {
    req.session.counter++
    return res.json({ message: `Te has conectado ${req.session.counter} veces` })
  }
  req.session.counter = 1
  res.json({ message: 'Bienvenidos Coders' })
})

router.get('/login', (req, res) => {
  const { user, password } = req.query

  if (user === 'mate' && password === 'mate123') {
    req.session.user = user
    req.session.admin = true
    return res.json({ message: 'Sesión iniciada' })
  }

  res.json({ message: 'El usuario y la contraseña no coinciden' })
})

router.get('/getSession', auth, (req, res) => {
  const session = req.session
  return res.json(session)
})

router.get('/logout', (req, res) => {
  req.session.destroy(error => {
    if (error) {
      return res.json({ error })
    }

    res.json({ message: 'Sesión eliminada' })
  })
})

function auth(req, res, next) {
  const { admin } = req.session
  if (!admin) {
    return res.json({ error: 'No tienes permisos!!!' })
  }
  next()
}

module.exports = router