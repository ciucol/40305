const { Router } = require('express')

const words = ['perro', 'gato', 'loro', 'conejo']

const router = Router()

router.param('word', (req, res, next, word) => {
  const searchWord = words.find(wordArray => wordArray === word)

  if (!searchWord) {
    req.word = null
  } else {
    req.word = searchWord
  }

  next()
})

router.get('/:word', (req, res) => {
  console.log(req.params.word, 'req.params')
  // console.log(req.word, 'router.param')

  res.json({ word: req.params.word })
})

module.exports = router
