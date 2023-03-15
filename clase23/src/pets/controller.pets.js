const { Router } = require('express')
const pets = []

const router = Router()

router.param('pet', (req, res, next, pet) => {
  const regex = /^[a-zA-Z\s]+$/

  if (regex.test(pet)) {
    req.pet = pet
    next()
  } else {
    res
      .status(400)
      .json({ error: 'Pet name can only contains letters and spaces' })
  }
})

router.get('/:pet', (req, res) => {
  console.log(req.pet)
  const petSearch = req.pet
  const pet = pets.find(pet => pet.name === petSearch)

  res.success('Usuario creado')

  res.json({ pet })
})

router.post('/', (req, res) => {
  const { name, specie } = req.body

  const newPetInfo = {
    name,
    specie,
  }

  pets.push(newPetInfo)

  res.json({ pets })
})

router.put('/:pet', (req, res) => {
  const petSearch = req.params.pet
  const pet = pets.find(pet => pet.name === petSearch)

  if (pet) pet.adopted = true

  res.json({ pets })
})

module.exports = router
