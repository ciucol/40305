const mongoose = require('mongoose')

class MongoConnect {
  static #instance

  constructor() {
    mongoose.connect('url')
  }

  static getInstance() {
    if (this.#instance) {
      return this.#instance
    }

    this.#instance = new Mongo()
    return this.#instance
  }
}

module.exports = MongoConnect
