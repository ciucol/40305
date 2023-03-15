const AuthRouter = require('../auth/controller.auth')
const dictionaryController = require('../dictionary/controller.dictionary')
const petsController = require('../pets/controller.pets')
const UsersRouter = require('../users/controller.users')

const authRouter = new AuthRouter()
const usersRouter = new UsersRouter()

const router = app => {
  app.use('/api/auth', authRouter.getRouter())
  app.use('/api/users', usersRouter.getRouter())
  app.use('/api/pets', petsController)
  app.use('/dictionary', dictionaryController)
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not Found' })
  })
}

module.exports = router
