const { Router } = require('express')
const Order = require('../dao/models/orders.model')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'GET' })
})

router.post('/', async (req, res) => {
  const order = await Order.create({
    name: 'Pepperoni',
    size: 'medium',
    price: 100,
    quantity: 12,
    date: new Date()
  })
  res.json({ message: order })
})

module.exports = router