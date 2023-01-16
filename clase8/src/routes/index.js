const users = require('../users/controller.users')
const pets = require('../pets/controller.pets')

const routes = (app) => {
  app.use('/api/users', users)
  app.use('/api/pets', pets)
  app.use('/api/videos', videos)

}

module.exports = routes