import { nanoid } from 'nanoid'
import { cookiesOption } from '../config/config.js'
import jsonwebtoken from 'jsonwebtoken'
export const genrateId = (length) => {

    return nanoid(length)

}

export const signToken = (payload) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, { expiresIn: '5m' })
}

export const verifyToken = () => {

    const decoded = jsonwebtoken.verify(payload, process.env.JWT_SECRET,)
    console.log(decoded.id)
    return decoded.id

}