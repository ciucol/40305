const ContactRepository = require('./Contacts.repository')
const ContactsDao = require('../dao/factory')

const contactsService = new ContactRepository(new ContactsDao())

module.exports = contactsService
