const mongoConect = require('../../db')
const { persistence } = require('../config')

switch (persistence) {
  case 'MONGO':
    mongoConect()
    console.log('persistencia en mongo')
    module.exports = require('./mongo/ContactsDAO.mongo')
    break

  case 'MEMORY':
    console.log('persistencia en memory')
    module.exports = require('./memory/ContactsDAO.memory')
    break

  case 'FILES':
    console.log('persistencia en archivos')
    module.exports = require('./files/ContactsDAO.file')
    break
}
