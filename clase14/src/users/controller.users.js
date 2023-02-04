const { Router } = require('express')
const userModel = require('../models/users.model')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await userModel.find()
    res.json({ result: 'success', payload: users })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body

    if (!first_name || !last_name || !email) {
      return res.status(400).json({ error: 'Bad request', message: 'Faltan campos' })
    }

    const user = {
      first_name,
      last_name,
      email
    }

    await userModel.create(user)

    res.json({ message: 'usuario creado' })
  } catch (error) {
    console.log('error')
    res.json({ message: error })
  }
})

module.exports = router