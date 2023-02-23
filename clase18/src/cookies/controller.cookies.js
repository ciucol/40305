const { Router } = require('express')

const router = Router()

router.get('/view', (req, res) => {
  res.render('cookies.handlebars')
})

router.get('/', (req, res) => {
  const cookies = req.cookies

  res.send(cookies)
})

router.post('/', (req, res) => {
  const user = req.body

  res.cookie('userInfo', JSON.stringify(user), { maxAge: 10000 }).json({ message: 'Cookie creada' })
})

module.exports = router