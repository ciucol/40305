const nodemailer = require('nodemailer')
const {
  serviceMail,
  serviceMailPort,
  emailUser,
  emailPassword,
} = require('../config/email.config')

const transport = nodemailer.createTransport({
  service: serviceMail,
  port: serviceMailPort,
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
})

module.exports = transport
