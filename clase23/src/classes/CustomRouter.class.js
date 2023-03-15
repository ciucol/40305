const { Router } = require('express')
const { verifyToken } = require('../utils/jwt.utils')

const router = Router()

router.get('/pets', (req, res) => {
  res.send('hi')
})

class CustomRouter {
  constructor() {
    this.router = Router()
    this.init()
  }

  getRouter() {
    return this.router
  }

  init() {}

  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }

  post(path, policies, ...callbacks) {
    this.router.post(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }

  applyCallbacks(callbacks) {
    return callbacks.map(callback => async (...params) => {
      try {
        await callback.apply(this, params)
      } catch (error) {
        console.log(error)
        params[1].status(500).json({ error })
      }
    })
  }

  generateCustomResponses(req, res, next) {
    res.sendSuccess = payload =>
      res.json({ status: 'Success', message: payload, statusCode: 200 })

    res.sendCreateSuccess = payload =>
      res.json({ status: 'Success', message: payload, statusCode: 201 })

    res.sendServerError = error =>
      res.status(500).json({
        status: 'Error',
        error: 'Internal server error',
        statusCode: 500,
      })

    res.sendUserError = error =>
      res.status(400).json({ status: 'Error', error, statusCode: 400 })

    next()
  }

  handlePolicies(policies) {
    return (req, res, next) => {
      if (policies.includes('PUBLIC')) return next()

      const authHeaders = req.headers.authorization
      if (!authHeaders)
        return res.status(401).json({ error: 'Not authenticated' })

      const token = authHeaders.split(' ')[1]
      const user = verifyToken(token)

      if (!policies.includes(user.role.toUpperCase()))
        return res.status(403).json({ error: 'Not authorized' })

      req.user = user
      next()
    }
  }
}

module.exports = CustomRouter
