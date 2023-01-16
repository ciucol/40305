const { Router } = require('express')

const router = Router()

const pets = []

const convertToNumber = (req, res, next) => {
  req.params.id = Number(req.params.id)
  next()
}

router.get('/', (req, res) => {
  res.json({ message: pets })
})

router.get('/:id', convertToNumber, (req, res) => {
  const id = req.params.id

  res.json({ message: id + 5 })
})

router.post('/', (req, res) => {
  const infoPet = req.body
  pets.push(infoPet)

  res.json({ message: 'pet created' })
})

module.exports = router














router.get('/videos/:idVideo/comments/:idComment')