import { shortUrlServiceNoUser } from '../sevices/shortUrl.service.js'
import urlModel from '../models/shortUrl.model.js';

export const createShortUrl = async (req, res) => {

    try {
        const { url } = req.body;
        const shortId = await shortUrlServiceNoUser(url)
        res.send(process.env.APP_URL + "/" + shortId)
    } catch (error) {
        next(error)
    }
}

export const redirectFromShorturl = async (req, res) => {

    const { id } = req.params
    const url = await urlModel.findOne({ short_url: id })
    if (url) {
        res.redirect(url.originalUrl)
    }
    else {
        res.status(404).send('NOT FOUND')
        console.log('url not found')
    }
}

