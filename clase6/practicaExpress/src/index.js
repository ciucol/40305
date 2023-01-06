import express from 'express'

const app = express()

const users = [
  {
    id: 1,
    name: 'Pablo',
    country: 'arg'
  },
  {
    id: 2,
    name: 'Juan',
    country: 'arg'
  },
  {
    id: 3,
    name: 'Lina',
    country: 'arg'
  },
  {
    id: 4,
    name: 'Caro',
    country: 'arg'
  }
]

app.use(express.urlencoded({ extended: true }))

app.get('/bienvenida', (req, res) => {
  res.send(`<h1 style="color:blue;">!Welcome to the course my friends!</h1>`)
})

app.get('/users', (req, res) => {
  console.log(req.query.name)
  console.log(req.query.country)
  console.log(req.query.age)
  const { id } = req.params
  res.send(users)
})

app.get('/users/:id', (req, res) => {
  console.log(req.query.name)
  console.log(req.query.country)
  console.log(req.query.age)
  const { id } = req.params
  res.send(users[id])
})

app.get('/products', (req, res) => {
  const { limit } = req.params
  res.send(users)
})
app.get('/categories', (req, res) => {
  res.send(users)
})
app.get('/admins', (req, res) => {
  res.send(users)
})


app.listen(3000, () => {
  console.log('running from express')
})