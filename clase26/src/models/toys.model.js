const mongoose = require('mongoose')

const collectionName = 'toy'

const collectionSchema = new mongoose.Schema({
  name: String,
  price: Number,
  currency: String,
})

const Toys = mongoose.model(collectionName, collectionSchema)

module.exports = Toys
