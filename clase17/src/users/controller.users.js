const { Router } = require('express')
const FilesManager = require('../dao/files.dao')
const UserManager = require('../dao/user.dao')
const usersManager = new FilesManager('Users.json')
const User = new UserManager()

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json({ message: users })
  } catch (error) {
    res.json({ error: error })
  }
})

router.post('/populate', async (req, res) => {
  try {
    const users = await usersManager.loadItems()
    const newUsers = await User.insertMany(users)
    res.json({ message: newUsers })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router