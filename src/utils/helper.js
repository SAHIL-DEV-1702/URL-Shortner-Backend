import { nanoid } from 'nanoid'
import { cookiesOption } from '../config/config.js'
import jsonwebtoken from 'jsonwebtoken'
export const genrateId = (length) => {

    return nanoid(length)

}

export const signToken = (payload) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, { expiresIn: '5m' })
}

export const verifyToken = (token) => {
    try {
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        return decoded.id
    } catch (err) {
        console.log("Token error:", err.message)
        return null
    }
}