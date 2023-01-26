const usersController = require('../users/controller.users')
const templatesController = require('../templates/controller.templates')

const router = (app) => {
  app.use('/', templatesController)
  app.use('/users', usersController)
}