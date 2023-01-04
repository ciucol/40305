import fs from 'fs'
import crypto from 'crypto'
import { v4 } from 'uuid'

const path = './files/Users.json'

export default class UserManager {

  async getUsers() {
    if (fs.existsSync(path)) {
      const data = await fs.promises.readFile(path, 'utf-8')
      const users = JSON.parse(data)
      return users
    }
    return []
  }

  async crearUsuario(user) {
    const { name, country, password } = user
    const infoUser = {
      name,
      country,
      password
    }
    const users = await this.getUsers()
    infoUser.id = v4()
    infoUser.salt = crypto.randomBytes(128).toString('base64')
    infoUser.password = crypto.createHmac('sha256', infoUser.salt).update(infoUser.password).digest('hex')
    users.push(infoUser)

    await fs.promises.writeFile(path, JSON.stringify(users, null, '\t'))
    return infoUser
  }
}
