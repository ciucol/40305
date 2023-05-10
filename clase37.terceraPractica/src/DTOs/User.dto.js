class UserDTO {
  constructor(info) {
    this.first_name = info.first_name
    this.last_name = info.last_name
    this.email = info.email
    this.password = info.password
    this.address = info.address
    this.country = info.country
    this.city = info.city
    this.zipcode = info.zipcode
  }
}

module.exports = UserDTO
