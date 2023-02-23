const User = require("./models/user.model");

class UserManager {
  async find() {
    try {
      const users = await User.paginate({}, { limit: 20 })
      return users
    } catch (error) {
      return error
    }
  }

  async insertOne(userInfo) {
    try {
      const newUser = await User.create(userInfo)
      return newUser
    } catch (error) {
      return error
    }
  }

  async insertMany(usersInfo) {
    try {
      const newUsers = await User.insertMany(usersInfo)
      return newUsers
    } catch (error) {
      return error
    }
  }

  async deleteAll() {
    try {
      await User.deleteMany()
      return 'Usuarios eliminados'
    } catch (error) {
      return error
    }
  }
}

module.exports = UserManager