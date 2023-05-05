const express = require('express')
const router = require('./router')
const addLogger = require('./middlewares/logger.middleware')

const app = express()
app.use(addLogger)

router(app)

app.listen(3000, () => {
  console.log(3000)
})
