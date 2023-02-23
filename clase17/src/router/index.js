const ordersController = require('../orders/controller.orders')
const usersController = require('../users/controller.users')

const router = (app) => {
  app.use('/orders', ordersController)
  app.use('/users', usersController)
}

module.exports = router