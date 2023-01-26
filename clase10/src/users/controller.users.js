const { Router } = require('express')

const router = Router()

const users = []

router.get('/', (req, res) => {
  res.json({ message: users })
})

router.post('/', (req, res) => {
  const { name, lastname, email, number, phone } = req.body

  const user = {
    name,
    lastname,
    country
  }

  users.push(user)
  res.json({ message: 'Usuario creado' })
})

module.exports = router