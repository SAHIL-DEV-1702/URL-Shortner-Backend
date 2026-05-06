
import express from 'express'
import { userUrls } from '../controller/user.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'

const router = express.Router();

router.get('/url', authMiddleware, userUrls)


export default router




