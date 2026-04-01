
import { cookiesOption } from "../config/config.js";

import { registerUser, loginUser } from "../sevices/auth.service.js";



export const register_user = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const { token, user } = await registerUser({ name, email, password })
        req.user = user
        res.cookie("accessToken", token, cookiesOption)
        return res.status(200).json({ message: "registered success" })

    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: err.message })
    }
}

export const login_user = async (req, res) => {

    try {
        const { email, password } = req.body

        const { user, token } = await loginUser(email, password)
        // console.log('token', token)  print token here
        if (!token) {
            return res.status(401).json({ message: "User not registered or invalid credentials" })
        }
        // console.log(user, "user print ")

        req.user = user
        res.cookie("accessToken", token, cookiesOption)
        return res.status(200).json({ message: "login success", user: user, token: token })


    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

}

export const logOut_user = async (req, res) => {
    res.clearCookie("accessToken")
    return res.status(200).json({ message: "logout success" })
}


export const getMe = async (req, res) => {

    try {

        const user = req.user
        return res.status(200).json({ user: req.user })


    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}