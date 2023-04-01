const { Router } = require('express')
const { createToy } = require('../services/toy.service')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'hi toys' })
})

router.post('/', async (req, res) => {
  try {
    const { name, price, currency } = req.body
    const newToyInfo = {
      name,
      price,
      currency,
    }

    const newToy = await createToy(newToyInfo)

    res.json({ message: newToy })
  } catch (error) {}
})

module.exports = router
