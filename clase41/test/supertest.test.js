import chai from 'chai'
import supertest from 'supertest'

const expect = chai.expect

const requester = supertest('http://localhost:8080')

describe('Testing AdoptMe', () => {
  describe('Test de mascotas', () => {
    const petMock = {
      name: 'Poncho',
      specie: 'Cat',
      birthDate: '10-10-2020',
    }

    it('El endpoint POST /api/pets debe crear una mascota correctamente', async () => {
      const { statusCode, created, _body } = await requester
        .post('/api/pets')
        .send(petMock)

      expect(statusCode).to.equal(201)
      expect(created).to.be.true
      expect(_body.payload).to.have.property('_id')
    })

    it('Al crear una mascota sólo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted : false', async () => {
      const { _body } = await requester.post('/api/pets').send(petMock)
      expect(_body.payload).to.have.property('adopted').is.false
    })

    it('Si se desea crear una mascota sin el campo nombre, el módulo debe responder con un status 400', async () => {
      const petMock = {
        specie: 'Cat',
        birthDate: '10-10-2020',
      }

      const { statusCode } = await requester.post('/api/pets').send(petMock)
      expect(statusCode).to.equal(400)
    })

    it('Al obtener a las mascotas con el método GET, la respuesta debe tener los campos status y payload. Además, payload debe ser de tipo arreglo', async () => {
      const { statusCode, body } = await requester.get('/api/pets')
      expect(statusCode).to.equal(200)
      expect(body).to.have.property('status')
      expect(body).to.have.property('payload')
      expect(body.payload).to.be.an('array')
    })

    it('El método PUT debe poder actualizar correctamente a una mascota determinada', async () => {})

    it('El método DELETE debe poder borrar la última mascota agregada', async () => {
      const {
        body: { payload },
      } = await requester.post('/api/pets').send(petMock)

      const { statusCode: deleteStatusCode } = await requester.delete(
        `/api/pets/${payload._id}`
      )
      expect(deleteStatusCode).to.equal(200)

      const { statusCode: getStatusCode } = await requester.get(
        `/api/pets/${payload._id}`
      )
      expect(getStatusCode).to.equal(404)
    })
  })

  describe('Test de sesiones', () => {
    it('Debe registrar correctamente a un usuario', async () => {
      const mockUser = {
        first_name: 'Mate',
        last_name: 'Naran',
        email: 'mate@naran.com',
        password: 'mate123',
      }

      const { _body, statusCode } = await requester
        .post('/api/sessions/register')
        .send(mockUser)

      expect(_body).to.have.property('payload')
      expect(statusCode).to.equal(201)
    })
  })

  it('Debe loguear correctamente al usuario y devolver una cookie', async () => {
    const mockUser = {
      email: 'mate@naran.com',
      password: 'mate123',
    }

    const result = await requester.post('/api/sessions/login').send(mockUser)
    console.log(result)
  })
})
