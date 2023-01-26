const { Router } = require('express')

const router = Router()

const users = [
  {
    name: 'John',
    lastname: 'Doe',
    age: 30,
    email: 'john@doe.com',
    phone: '1234567890'
  },
  {
    name: 'Jane',
    lastname: 'Doe',
    age: 25,
    email: 'jane@doe.com',
    phone: '0987654321'
  },
  {
    name: 'Juan',
    lastname: 'Perez',
    age: 30,
    email: '',
    phone: '1234567890'
  }
]

const anUser = {
  name: 'Mate',
  lastname: 'Naran',
  age: 3,
  email: '',
  phone: '1234567890'
}

router.get('/', (req, res) => {
  const { limit = 9 } = req.query
  console.log(limit)

  const random = Math.floor(Math.random() * users.length)

  res.render('users.handlebars', { user: users[random] })
})

module.exports = router