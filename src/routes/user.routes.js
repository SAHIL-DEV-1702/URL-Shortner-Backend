
import express from 'express'
import { userUrls, deleteUserUrl } from '../controller/user.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'

const router = express.Router();

router.get('/url', authMiddleware, userUrls)
router.delete('/url/:id', authMiddleware, deleteUserUrl)

export default router




