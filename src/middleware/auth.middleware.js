import { verifyToken } from '../utils/helper';


export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken

        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const decoded = verifyToken(token,);
        const user = await findUserById(decoded)

        if (!user) return res.send(401).json({ message: "Unauthorized" })

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }

};

