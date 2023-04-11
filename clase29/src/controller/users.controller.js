const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
  try {
    res.json({ status: 'success', message: 'hi users' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ status: 'error', message: 'Internal Server Error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    res.json({ status: 'success', message })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ status: 'error', message: 'Internal Server Error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const {} = req.body
    res.status(201).json({ status: 'success', message })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ status: 'error', message: 'Internal Server Error' })
  }
})

module.exports = router
