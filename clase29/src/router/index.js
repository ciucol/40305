const usersController = require('../controller/users.controller')
const restaurantsController = require('../controller/restaurants.controller')
const ordersController = require('../controller/orders.controller')

const router = app => {
  app.use('/users', usersController)
  app.use('/restaurants', restaurantsController)
  app.use('/orders', ordersController)
}

module.exports = router
