const { Router } = require('express')
const PaymentService = require('../services/payments.service')

const router = Router()

const products = [
  { id: 1, name: 'papas', price: 1000 },
  { id: 2, name: 'queso', price: 500 },
  { id: 3, name: 'hamburguesa', price: 1500 },
  { id: 4, name: 'soda', price: 1000 },
  { id: 5, name: 'golosinas', price: 800 },
]

router.post('/payment-intents', async (req, res) => {
  try {
    const { id } = req.query
    const productRequested = products.find(product => product.id === Number(id))

    if (!productRequested)
      return res.status(400).json({ error: 'Product not found' })

    const paymentIntentInfo = {
      amount: productRequested.price,
      currency: 'usd',
      metadata: {
        userId: 'uichf84nchow8ahxmw8a',
        orderDetail: JSON.stringify(productRequested.name),
        address: JSON.stringify({
          street: 'Av. siempre viva 123',
          country: 'col',
        }),
      },
    }

    const service = new PaymentService()

    const result = await service.createPaymentIntent(paymentIntentInfo)

    res.send({ payload: result })
  } catch (error) {
    res.json({ error: error.message })
  }
})

module.exports = router
