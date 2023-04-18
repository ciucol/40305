const { Router } = require('express')
const transport = require('../utils/email.util')
const { emailUser } = require('../config/email.config')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const { to, subject, message } = req.body

    const html = `
    <html>
      <div>
        ${message}
        <img src="cid:loro" alt="un loro"/>
      </div>
    </html>
  `

    const mailOptions = {
      from: emailUser,
      to,
      subject,
      html,
      attachments: [
        {
          filename: 'loro.JPG',
          path: process.cwd() + '/src/images/loro.JPG',
          cid: 'loro',
        },
        {
          filename: 'design-patterns-es.pdf',
          path: process.cwd() + '/src/files/design-patterns-es.pdf',
        },
      ],
    }
    const result = await transport.sendMail(mailOptions)

    res.json({ message: result })
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message })
  }
})

module.exports = router
