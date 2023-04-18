const mailController = require('../controller/mail.controller')
const smsController = require('../controller/sms.controller')

const router = app => {
  app.use('/mail', mailController)
  app.use('/sms', smsController)
}

module.exports = router
