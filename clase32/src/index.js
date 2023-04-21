const express = require('express')
const compression = require('express-compression')
const router = require('./router')
const errorHandler = require('./middlewares/errors/handler.errors')

const app = express()

app.use(express.json())
app.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
)

router(app)

app.use(errorHandler)

module.exports = app
