const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
const viewsRouter = require('./router/views.router')

const port = 9000

const app = express()

const httpServer = app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

const socketServer = new Server(httpServer)

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

app.use('/', viewsRouter)

const logs = []
socketServer.on('connection', socket => {
  console.log('Nuevo cliente conectado' + socket.id)
  socket.on('message', data => {
    console.log(data)
    socketServer.emit('log', data)
  })

  socket.on("message2", data => {
    logs.push({ socketid: socket.id, message: data })
    socketServer.emit('log', { logs });
  })
})