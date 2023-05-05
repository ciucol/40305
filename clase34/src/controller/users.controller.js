const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  try {
    if (Object.entries(req.query).length === 0)
      req.logger.warning('La request no trajo queries')

    res.json({ message: 'hi' })
  } catch (error) {
    console.error(error)
  }
})

router.get('/easy', (req, res) => {
  let suma = 0
  for (let i = 0; i < 1000000; i++) {
    suma += i
  }

  res.json({ suma })
})

router.get('/hard', (req, res) => {
  let suma = 0
  for (let i = 0; i < 5e8; i++) {
    suma += i
  }

  res.json({ suma })
})

module.exports = router
