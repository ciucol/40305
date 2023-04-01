const express = require('express')
// const cors = require('cors')

const MongoConnect = require('../db')

const app = express()

// app.use(cors())

app.get('/users', (req, res) => {
  res.json({ message: 'Hola usuarios' })
})

app.listen(8000, () => {
  console.log(8000)
})
