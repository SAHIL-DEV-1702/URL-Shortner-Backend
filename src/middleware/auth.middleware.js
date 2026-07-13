import { getTokenFromRequest, verifyToken } from '../utils/helper.js';
import { findById } from '../dao/user.dao.js';

export const authMiddleware = async (req, res, next) => {
    const token = getTokenFromRequest(req);

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        const userId = decoded.id || decoded._id;

        if (!userId) {
            return res.status(401).json({ message: 'Invalid token payload' });
        }

        const user = await findById(userId);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log('Token error:', error.message);
        return res.status(401).json({ message: 'Unauthorized' });
    }
};