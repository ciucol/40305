const ContactDTO = require('../DTOs/Contact.dto')

class ContactRepository {
  constructor(dao) {
    this.dao = dao
  }

  async getAll() {
    try {
      return await this.dao.getAll()
    } catch (error) {
      throw error
    }
  }

  async create(contact) {
    try {
      const newContactInfo = new ContactDTO(contact)
      return await this.dao.create(newContactInfo)
    } catch (error) {
      throw error
    }
  }
}

module.exports = ContactRepository
