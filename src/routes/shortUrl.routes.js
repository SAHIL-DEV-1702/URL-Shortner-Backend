import express from 'express'
import { createShortUrl, createShortUrlAuth } from '../controller/shortUrl.controller.js'
const router = express.Router()


router.post("/", createShortUrl)
import { authMiddleware } from '../middleware/auth.middleware.js'

router.post("/auth", authMiddleware, createShortUrlAuth)


export default router

    