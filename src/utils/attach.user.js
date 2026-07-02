
import { verifyToken } from "../utils/helper.js"
import { findById } from "../dao/user.dao.js"


export const attachedUser = async (req, res, next) => {

    const token = req.cookies.accessToken

    // console.log("cookies access", req.cookies)
    // console.log(token, "token");  i got here 


    if (!token) return next()

    try {

        const decoded = verifyToken(token)

        if (!decoded) return next()

        const userId = decoded.id || decoded._id
        if (!userId) return next()

        const user = await findById(userId)

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