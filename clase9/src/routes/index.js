const users = require('../users/controller.users')
const foods = require('../foods/controller.foods')

const router = (app) => {
  app.use('/users', users)
  app.use('/foods', foods)
}

module.exports = router