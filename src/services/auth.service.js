
import { createUser, findByEmail } from '../dao/user.dao.js'
import { signToken } from '../utils/helper.js'



export const registerUser = async (name, email, password) => {
    console.log(email)

    const user = await findByEmail(email)

    if (user) throw new Error("User already exists")

    const newUser = await createUser({ name, email, password })
    const token = signToken({ id: newUser._id })
    return {
        user: newUser,
        token
    }
}


export const loginUser = async (email, password) => {
    try {
        const user = await findByEmail(email)

        if (!user) return { error: "User not found" }

        const isPasswordValid = await user.comparePassword(password)

        if (!isPasswordValid) return { error: "Invalid credentials" }

        const token = signToken({ id: user._id })

        return { user, token }

    } catch (error) {
        console.log("Error in loginUser:", error.message)
        return { error: error.message }
    }
}
