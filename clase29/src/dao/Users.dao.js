const Users = require('./models/Users.model')

class UsersDAO {
  constructor() {}

  async getAll() {
    try {
      return await Users.find()
    } catch (error) {
      throw error
    }
  }

  async getOne(id) {
    try {
      return await Users.findById(id)
    } catch (error) {
      throw error
    }
  }

  async create(userInfo) {
    try {
      return await Users.create(userInfo)
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersDAO
