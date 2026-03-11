import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
const app = express();

import connectDb from './src/config/mongodb.config.js';
import urlSchema from './src/models/shortUrl.model.js'
import shortUrl from './src/routes/shortUrl.routes.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/create', shortUrl)


app.get('/:id', async (req, res) => {
    const { id } = req.params
    const url = await urlSchema.findOne({ short_url: id })
    if (url) {
        res.redirect(url.orignalUrl)
    }
    else {
        res.status(404).send('NOT FOUND')
    }
})


app.listen(8000, () => {
    connectDb()
    console.log('app is listning on port 8000')
})