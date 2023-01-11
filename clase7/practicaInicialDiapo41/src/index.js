const express = require('express')

const app = express()

const users = [
  {
    id: 1,
    name: 'John',
    country: 'USA'
  },
  {
    id: 2,
    name: 'Diana',
    country: 'Argentina'
  },
  {
    id: 3,
    name: 'Pedro',
    country: 'Uruguay'
  },
  {
    id: 4,
    name: 'Caro',
    country: 'Chile'
  }
]

app.use(express.json())

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/users/:id', (req, res) => {
  res.send(users)
})

app.post('/users', (req, res) => {
  const { name, country } = req.body
  users.push({ name, country })
  res.status(201).json({ message: 'Usuario creado' })
})

app.put('/users/:id', (req, res) => {
  const { id } = req.params
  const { name, country } = req.body
  const infoUser = {
    name, country
  }

  if (!name) res.status(400).json('error: no se encuentra el name')
  if (!country) res.status(400).json('error: no se encuentra el country')

  const myId = Number(id)
  const userPos = users.findIndex(user => user.id === myId)
  const userId = users[userPos].id
  users[userPos] = {
    userId,
    ...infoUser
  }
  res.json({ message: 'usuario actualizado' })
})

app.delete('/users/:id', (req, res) => {

})

app.listen(8080, () => {
  console.log('server running at port 8080')
})