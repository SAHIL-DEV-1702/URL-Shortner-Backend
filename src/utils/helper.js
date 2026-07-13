import { nanoid } from 'nanoid'
import jwt from 'jsonwebtoken'

export const genrateId = (length) => {
    return nanoid(length)
}

export const signToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30m' })
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return decoded
    } catch (err) {
        console.log('Token error:', err.message)
        return null
    }
}

export const getTokenFromRequest = (req) => {
    const authHeader = req?.headers?.authorization || '';
    const bearerToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    return bearerToken || req?.cookies?.accessToken || '';
}



