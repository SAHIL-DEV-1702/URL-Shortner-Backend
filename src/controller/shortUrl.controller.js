import { shortUrlServiceNoUser, shortUrlServiceUser } from '../services/shortUrl.service.js';
import shortUrlModel from '../models/shorturl.model.js'


export const createShortUrl = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data)
        let shortUrl
        if (req.user) {
            shortUrl = await shortUrlServiceUser(data.url, req.user._id, data.slug)
        }
        else {
            shortUrl = await shortUrlServiceNoUser(data.url)
        }
        res.status(200).json({ shortUrl: process.env.APP_URL + "/" + shortUrl })
    } catch (error) {
        next(error)
    }
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
    const url = await shortUrlModel.findOne({ short_url: id })
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

    res.status(200).json({ shortUrl: process.env.APP_URL + "/" + shortUrl })

}






