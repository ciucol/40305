const { Command } = require('commander')

const command = new Command()

command
  .option('-d', 'Variable para debug', false)
  .option('-p <port>', 'Puerto del servidor', 3000)
  .option('--mode <mode>', 'Ambiente', 'production')
  .requiredOption('-u <user>', 'Usuario a usar', 'No llegó el usuario')
  .option('-l, --letters [letters...]', 'especifica letras')
  .parse()

console.log(command.opts())
console.log(command.args)
