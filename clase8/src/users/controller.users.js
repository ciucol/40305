const { Router } = require('express')

const router = Router()

const users = []

router.get('/', (req, res) => {
  res.json({ message: users })
})

router.post('/', (req, res) => {
  const infoUser = req.body
  users.push(infoUser)

  res.json({ message: 'user created' })
})

module.exports = router
