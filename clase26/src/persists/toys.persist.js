const Toys = require('../models/toys.model')

const persistToy = async newToyInfo => {
  const newToy = await Toys.create(newToyInfo)

  return newToy
}

module.exports = {
  persistToy,
}
