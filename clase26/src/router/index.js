const toysController = require('../controllers/toys.controller')
const usersController = require('../controllers/users.controller')

const router = app => {
  app.use('/toys', toysController)
  app.use('/users', usersController)
}

module.exports = router
