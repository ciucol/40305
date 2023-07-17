const Stripe = require('stripe')

class PaymentService {
  constructor() {
    this.stripe = new Stripe(
      'sk_test_51NIgHaEEMTBzWRac9uGeFMTDgODSIigTRpbsdF8yn2HwlnREMQ4ELD2Ky6GtupY9kVAHnmYBG701oW3uMSAy1Mqt006jzYIokz'
    )
  }

  async createPaymentIntent(data) {
    return await this.stripe.paymentIntents.create(data)
  }
}

module.exports = PaymentService
