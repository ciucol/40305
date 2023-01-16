const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hi Users GET' })
})

router.post('/', (req, res) => {
  res.json({ message: 'Hi Users POST' })
})

router.put('/', (req, res) => {
  res.json({ message: 'Hi Users PUT' })
})

router.delete('/', (req, res) => {
  res.json({ message: 'Hi Users DELETE' })
})

module.exports = {
  router
}
