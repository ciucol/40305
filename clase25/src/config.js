const dotenv = require('dotenv')
const { Command } = require('commander')

const command = new Command()

command.option('--mode <modo>', 'Environment').parse()

const { mode } = command.opts()

dotenv.config({ path: `./.env.${mode}` })

// const environment = process.env.NODE_ENV

// dotenv.config({
//   path:
//     environment === 'DEVELOPMENT' ? './.env.development' : './.env.production',
// })

module.exports = {
  port: process.env.PORT,
  token: process.env.TOKEN,
}
