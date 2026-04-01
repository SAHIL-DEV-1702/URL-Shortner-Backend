
import { createUser, findByEmail, findByEmailAndPassword } from '../dao/user.dao.js'
import { signToken } from '../utils/helper.js'



export const registerUser = async (data) => {
    const { name, email, password } = data
    const user = await findByEmail(email)
    if (user) throw new Error("user already exist");

    const newUser = await createUser({ name, email, password })
    const token = signToken({ id: newUser._id })
    return { token }
}


export const loginUser = async (email, password) => {
    const user = await findByEmail(email)

    if (!user) throw new Error("User not found")

    const isPasswordValid = await user.comparePassword(password)

    if (!isPasswordValid) throw new Error("Invalid credentials")

    const token = signToken({ id: user._id })

    return { user, token }
}
