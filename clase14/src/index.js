const express = require('express')
const router = require('./router')
const mongoose = require('mongoose')

const port = 3000

const app = express()

app.use(express.json())

router(app)

mongoose.connect('mongodb+srv://CoderUser:coderbackend@codercluster.nnacu7y.mongodb.net/?retryWrites=true&w=majority', error => {
  if (error) {
    console.log(`Cannot connect to db. Error: ${error}`)
    process.exit()
  }
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})