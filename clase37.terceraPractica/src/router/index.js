const usersController = require('../controller/users.controller')

const router = app => {
  app.use('/users', usersController)
  app.use('*', (req, res) => {
    console.log('404 not found!!!')
  })
}

module.exports = router
