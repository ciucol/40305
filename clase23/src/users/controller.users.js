const CustomRouter = require('../classes/CustomRouter.class')

class UsersRouter extends CustomRouter {
  init() {
    this.get('/', ['PUBLIC'], (req, res) => {
      res.sendSuccess('Hola desde un custom router')
    })

    this.post('/', ['SUPERADMIN', 'ADMIN'], (req, res) => {
      res.sendCreateSuccess('Usuario creado con exito')
    })
  }
}

module.exports = UsersRouter
