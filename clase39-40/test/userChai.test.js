import mongoose from 'mongoose'
import Users from '../src/dao/Users.dao.js'
import chai from 'chai'

mongoose.connect(
  'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/?retryWrites=true&w=majority'
)

const expect = chai.expect

describe('Testear dao de usuarios con CHAI', () => {
  const mockUser = {
    first_name: 'Mate',
    last_name: 'Naran',
    email: 'mate@naran.com',
    password: 'mate123',
  }

  before(function () {
    this.Users = new Users()
  })

  beforeEach(async function () {
    this.timeout(5000)
    await mongoose.connection.collections.users.deleteMany({})
  })

  it('El DAO debe poder obtener los usuarios en formato de arreglo', async function () {
    const result = await this.Users.get()
    // assert.strictEqual(Array.isArray(result), true)
    expect(result).to.be.deep.equal([])
  })

  it('El DAO debe agregar correctamente un elemento a la base de datos', async function () {
    const result = await this.Users.save(mockUser)
    // assert.ok(result._id)
    expect(result).to.have.property('_id')
  })

  it('El DAO agregará al documento insertado un arreglo de mascotas vacío por defecto', async function () {
    const result = await this.Users.save(mockUser)

    // assert.deepStrictEqual(result.pets, [])
    expect(result).to.have.property('pets').to.be.an('array').that.is.empty
  })

  it('El DAO puede obtener a un usuario por email', async function () {
    const result = await this.Users.save(mockUser)

    const user = await this.Users.getBy({ email: result.email })
    // assert.strictEqual(typeof user, 'object')
    expect(result).to.have.property('email')
  })

  it('El DAO puede actualizar el nombre del usuario', async function () {
    const user = await this.Users.save(mockUser)

    await this.Users.update(user._id, {
      first_name: 'Titín',
    })

    const result = await this.Users.getBy({ _id: user._id })

    expect(result.first_name).to.equal('Titín')
  })

  it('El DAO debe poder eliminar un usuario', async function () {
    const user = await this.Users.save(mockUser)

    await this.Users.delete(user._id)

    const result = await this.Users.getBy({ email: user.email })

    expect(result).is.null
    // expect(result).to.be.null
  })
})
