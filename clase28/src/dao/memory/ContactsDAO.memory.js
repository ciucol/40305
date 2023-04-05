class ContactsMemoryDao {
  constructor() {
    this.data = []
  }

  getAll() {
    return this.data
  }

  create(newUserInfo) {
    this.data.push(newUserInfo)
    return 'Usuario creado con éxito'
  }
}

module.exports = ContactsMemoryDao
