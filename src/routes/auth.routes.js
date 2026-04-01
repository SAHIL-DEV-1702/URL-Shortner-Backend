
import express from 'express'
import { login_user, register_user, logOut_user,getMe } from '../controller/auth.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'

const router = express.Router();

router.post('/register', register_user)
router.post('/login', login_user)
router.post('/logout', logOut_user)
router.get('/me', authMiddleware, getMe)


export default router




