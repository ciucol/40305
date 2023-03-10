const express = require('express')
const handlebars = require('express-handlebars')
const router = require('./routes')

const port = 3000

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');

app.set(express.static(__dirname + '/public'))

router(app)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})