const { Router } = require('express')

const router = Router()

const food = [
  {
    name: 'Hamburguesa',
    price: 30,
  },
  {
    name: 'Pizza',
    price: 50,

  },
  {
    name: 'Papas',
    price: 20,
  },
  {
    name: 'Ensalada',
    price: 20,
  },
  {
    name: 'Pasta',
    price: 30,
  },
  {
    name: 'Sushi',
    price: 50,
  }
]


router.get('/', (req, res) => {

  const user = {
    name: 'Mate',
    lastname: 'Naran',
    role: 'admin'
  }

  res.render('index.handlebars', {
    user,
    style: 'index.css',
    isAdmin: user.role === 'admin',
    food,
  })
})

module.exports = router