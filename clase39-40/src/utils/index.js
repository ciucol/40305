import bcrypt from 'bcrypt'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const createHash = async password => {
  return bcrypt.hash(password, await bcrypt.genSalt(10))
}

export const passwordValidation = async (user, password) =>
  bcrypt.compare(password, user.password)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(dirname(__filename))

export default __dirname
