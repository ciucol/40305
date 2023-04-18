require('dotenv').config()

module.exports = {
  twilioAccountSID: process.env.TWILIO_ACCOUNT_SID,
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
  twilioSMSNumber: process.env.TWILIO_SMS_NUMBER,
}
