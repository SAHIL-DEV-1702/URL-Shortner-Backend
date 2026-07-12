import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import express from 'express'
const app = express();

app.use(cors({
    origin: "https://nano-urls.netlify.app",
    credentials: true
}))

import connectDb from './src/config/mongodb.config.js'
import shortUrl from './src/routes/shortUrl.routes.js'
import auth_routes from './src/routes/auth.routes.js'
import user_routes from './src/routes/user.routes.js'
import { redirectFromShorturl } from './src/controller/shortUrl.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import { attachedUser } from './src/utils/attach.user.js';
import cookieParser from 'cookie-parser'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(attachedUser)


app.use('/api/user', user_routes)
app.use('/api/create', shortUrl)
app.use('/api/auth', auth_routes)

app.get('/:id', redirectFromShorturl)
app.use(errorHandler)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    connectDb().then(console.log("database connected successfully"))
        .catch((error) => {
            console.log(error)
        })
    console.log(`Server running on ${PORT}`);
});