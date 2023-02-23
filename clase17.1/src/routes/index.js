const controllerOrders = require('../orders/controller.orders')

const router = (app) => {
  app.use('/orders', controllerOrders)
}

module.exports = router