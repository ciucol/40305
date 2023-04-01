const Users = '../models/users.models.js'

class UsersMongoDAO {
  constructor() {}

  async recogerUsuarios() {
    try {
      const users = await Users.find()
      return users
    } catch (error) {}
  }

  async crearUsuarios() {
    try {
      const users = await Users.create()
      return users
    } catch (error) {}
  }
}
