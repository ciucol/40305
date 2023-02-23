const express = require('express')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

router(app)

app.listen(3000, () => {
  console.log('listening on 3000')
})