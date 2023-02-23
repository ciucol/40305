const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const router = require('./routes')
const port = 3000

const app = express()

app.use(morgan('dev'))

router(app)

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/40305-aggregations?retryWrites=true&w=majority', error => {
  if (error) console.log(error)
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})