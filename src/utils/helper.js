import { nanoid } from 'nanoid'
import { cookiesOption } from '../config/config'
export const genrateId = (length) => {

    return nanoid(length)

}

export const signToken = (playload) => {
    return jasonwebtoken.sign(playload, process.env.JWT_SECRET, cookiesOption)
}

export const verifyToken = () => {

    return jasonwebtoken.verify(playload, process.env.JWT_SECRET,)


}