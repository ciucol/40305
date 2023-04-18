const { Router } = require('express')
const twilio = require('twilio')
const {
  twilioAccountSID,
  twilioAuthToken,
  twilioSMSNumber,
} = require('../config/sms.config')

const router = Router()
const client = twilio(twilioAccountSID, twilioAuthToken)

router.get('/', async (req, res) => {
  try {
    const { to, name, product } = req.body

    const body = `Hola ${name}, tu ${product} ha sido deapachado y pronto lo recibirás aunque no puedas jugar`

    const result = await client.messages.create({
      from: twilioSMSNumber,
      to,
      body,
    })

    res.json({ message: result })
  } catch (error) {
    res.json({ status: 'error', error: error.message })
  }
})

module.exports = router
