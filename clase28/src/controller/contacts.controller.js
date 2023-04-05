const { Router } = require('express')
const contactsService = require('../repositories')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await contactsService.getAll()
    res.json({ status: 'success', message: users })
  } catch (error) {
    res.json({ status: 'error', error })
  }
})

router.post('/', async (req, res) => {
  try {
    const contact = req.body

    const newContact = await contactsService.create(contact)

    res.json({ status: 'success', message: newContact })
  } catch (error) {
    res.json({ status: 'error', error })
  }
})

module.exports = router
