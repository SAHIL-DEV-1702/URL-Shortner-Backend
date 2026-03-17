import jwt from 'jsonwebtoken'
import User from '../models/user.model'
import { createUser, findById, findByEmail } from '../dao/user.dao'
import { signToken } from '../utils/helper'


export const registerUser = async (name, email, password) => {
    const user = findByEmail({ email: email })
    if (email) {
        throw new Error("user already exist");
    }
    const newUser = await createUser({ name, email, password })
    const token = await signToken({ id: newUser._id })
    return token
}