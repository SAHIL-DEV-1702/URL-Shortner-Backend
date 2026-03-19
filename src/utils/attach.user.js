
import { verifyToken } from "../utils/helper.js"
import { findById } from "../dao/user.dao.js"


export const attachedUser = async (req, res, next) => {

    const token = req.cookies.accessToken

    // console.log("cookies access", req.cookies)
    // console.log(token, "token");  i got here 


    if (!token) return next()

    try {

        const decoded = verifyToken(token)

        // console.log("decoded", decoded)  got value here

        const user = await findById(decoded.id)

        if (!user) return next()
        req.user = user

        // console.log("user", req.user)   //got value here 

        next()

    }
    catch (error) {
        console.log(error)
        next()
    }

}