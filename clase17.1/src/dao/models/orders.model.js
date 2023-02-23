const mongoose = require('mongoose')

const orderCollection = 'order'

const orderSchema = new mongoose.Schema({
  name: String,
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'medium'
  },
  price: Number,
  quantity: Number,
  date: Date
})

const Order = mongoose.model(orderCollection, orderSchema)

module.exports = Order