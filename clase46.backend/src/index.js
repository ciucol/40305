const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

router(app)

app.listen(8080, () => {
  console.log(8080)
})
