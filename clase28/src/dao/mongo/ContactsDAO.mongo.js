const Contacts = require('./models/Contacts.model')

class ContactsMongoDao {
  constructor() {}

  async getAll() {
    try {
      return await Contacts.find()
    } catch (error) {
      throw new Error(error)
    }
  }

  async create(newUserInfo) {
    try {
      return await Contacts.create(newUserInfo)
    } catch (error) {
      return error
    }
  }
}

module.exports = ContactsMongoDao
