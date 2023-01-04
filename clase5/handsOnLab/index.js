import UserManager from './class/UserManager.js'

const userManager = new UserManager()

const newUser = { name: 'Diego', country: 'col', password: '12345', amount: 100000000000 }
userManager.crearUsuario(newUser)