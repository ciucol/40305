const mongoose = require('mongoose')

const userCollection = 'users'

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: Number,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  address: String,
  country: String,
  city: String,
  zipcode: Number,
})

const Users = mongoose.model(userCollection, userSchema)

module.exports = Users
