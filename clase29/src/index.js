const express = require('express')
const cors = require('cors')
const router = require('./router')
const mongoConect = require('../db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

router(app)

mongoConect()

app.listen(3000, () => {
  console.log(3000)
})
