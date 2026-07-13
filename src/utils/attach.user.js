import { getTokenFromRequest, verifyToken } from "../utils/helper.js"
import { findById } from "../dao/user.dao.js"

export const attachedUser = async (req, res, next) => {
    const token = getTokenFromRequest(req)

    if (!token) return next()

    try {
        const decoded = verifyToken(token)

        if (!decoded) return next()

        const userId = decoded.id || decoded._id
        if (!userId) return next()

        const user = await findById(userId)

        if (!user) return next()

        req.user = user
        next()
    } catch (error) {
        console.log(error)
        next()
    }
}