const conectar = () => {
  fetch('http://localhost:8000/users')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}

const Users = new UsersDAO()

Users.recogerUsuarios()

class UsersFileDAO {
  constructor() {}

  async recogerUsuarios() {
    try {
      const users = await fs.readFileSync()
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
