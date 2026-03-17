import { registerUser } from "../sevices/auth.service";

export const register_user = async () => {

    const { name, email, password } = req.body
    const user = await registerUser(name, email, password)
    resizeBy.send(200).json(user)

}

export const login_user = async (req, res) => {
    res.send("Login")
}