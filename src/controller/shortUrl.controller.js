import { shortUrlServiceNoUser, shortUrlServiceUser } from '../sevices/shortUrl.service.js';
import urlModel from '../models/shortUrl.model.js';


export const createShortUrl = async (req, res) => {

    const { url } = req.body;
    let shortUrl
    if (req.user) {
        shortUrl = await shortUrlServiceUser(url, req.user._id)
    }
    else {
        shortUrl = await shortUrlServiceNoUser(url)
    }
    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl })

}

export const createShortUrlAuth = async (req, res, next) => {

    try {
        const { url } = req.body;

        console.log("req.user from 20 shortcontroller", req.user)

        const shortId = await shortUrlServiceUser(url, req.user._id)
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

export const createCustomUrl = async (req, res) => {

    const { url, slug } = req.body
    const shortUrl = await shortUrlServiceNoUser(url, slug)

    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl })

}






