import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import express from 'express'
const app = express();
app.use(cors())

import connectDb from './src/config/mongodb.config.js'
import shortUrl from './src/routes/shortUrl.routes.js'
import { redirectFromShorturl } from './src/controller/shortUrl.controller.js';

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/create', shortUrl)


app.get('/:id', redirectFromShorturl)

app.listen(8000, () => {
    connectDb()
    console.log('app is listning on port 8000')
})