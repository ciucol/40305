const { Router } = require('express')
const UsersDAO = require('../dao/mongo/Users.dao')
const UserDTO = require('../DTOs/User.dto')
const validateBodyValues = require('../middlewares/validateBodyValues.middleware')

const router = Router()
const Users = new UsersDAO()

router.get('/', async (req, res) => {
  try {
    const users = await Users.getAll()
    res.json({ message: users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal server error' })
  }
})

router.post(
  '/',
  validateBodyValues('first_name', 'last_name', 'email', 'password'),
  async (req, res) => {
    try {
      const newUser = await Users.create(req.user)
      res.json({ message: newUser })
    } catch (error) {
      console.log(error)
      res.status(500).json({ status: 'error', error: 'Internal server error' })
    }
  }
)

router.delete('/', async (req, res) => {
  await Users.deleteAll()
  res.json({ message: 'Usuarios eliminados' })
})

module.exports = router
