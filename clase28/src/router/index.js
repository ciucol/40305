const contactsController = require('../controller/contacts.controller')

const router = app => {
  app.use('/contacts', contactsController)
}

module.exports = router
