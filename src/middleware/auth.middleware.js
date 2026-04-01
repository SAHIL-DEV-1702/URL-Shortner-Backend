import { verifyToken } from '../utils/helper.js';
import { findById } from '../dao/user.dao.js';

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken

        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const decoded = verifyToken(token,);
        const user = await findById(decoded)

        if (!user) return res.status(401).json({ message: "Unauthorized" })

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }

};

