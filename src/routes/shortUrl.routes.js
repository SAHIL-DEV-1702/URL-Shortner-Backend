import express from 'express'
import { createShortUrl ,createCustomUrl} from '../controller/shortUrl.controller.js'
const router = express.Router()


router.post("/", createShortUrl)
router.post("/", createCustomUrl)






export default router

