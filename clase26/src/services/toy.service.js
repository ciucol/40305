const { persistToy } = require('../persists/toys.persist')

const createToy = async newToyInfo => {
  try {
    if (newToyInfo.currency === 'usd') {
      newToyInfo.price *= 207.83
      newToyInfo.currency = 'ars'
    }

    const newToy = await persistToy(newToyInfo)

    if (newToyInfo.currency === 'ars') {
      newToy.price *= 0.0048
      newToyInfo.currency = 'usd'
    }

    return newToy
  } catch (error) {}
}

module.exports = {
  createToy,
}
