const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const userCollection = 'users'

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  gender: String
})

userSchema.plugin(mongoosePaginate)
const User = mongoose.model(userCollection, userSchema)
module.exports = User