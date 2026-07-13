import { shortUrlServiceNoUser, shortUrlServiceUser } from '../services/shortUrl.service.js';
import shortUrlModel from '../models/shorturl.model.js'

const getPublicBaseUrl = () => {
    return process.env.APP_URL?.trim() || process.env.FRONTEND_URL?.trim() || 'https://url-shortner-backend-1-7ems.onrender.com';
};

export const createShortUrl = async (req, res, next) => {
    try {
        const data = req.body;
        const baseUrl = getPublicBaseUrl();
        let shortUrl

        if (req.user) {
            shortUrl = await shortUrlServiceUser(data.url, req.user._id, data.slug)
        } else {
            shortUrl = await shortUrlServiceNoUser(data.url)
        }

        res.status(200).json({ shortUrl: `${baseUrl}/${shortUrl}` })
    } catch (error) {
        next(error)
    }
}



export const createShortUrlAuth = async (req, res, next) => {
    try {
        const { url, slug } = req.body;
        const baseUrl = getPublicBaseUrl();
        const shortId = await shortUrlServiceUser(url, req.user._id, slug)
        res.status(200).json({ shortUrl: `${baseUrl}/${shortId}` })
    } catch (error) {
        next(error)
    }
}

export const redirectFromShorturl = async (req, res) => {
    const { id } = req.params
    const url = await shortUrlModel.findOneAndUpdate(
        { $or: [{ short_url: id }, { customSlug: id }] },
        { $inc: { clicks: 1 } },
        { new: true }
    )

    if (url) {
        console.log(`Redirecting short url ${id}, clicks=${url.clicks}`)
        return res.redirect(url.originalUrl)
    }

    console.log(`Short url not found: ${id}`)
    res.status(404).send('NOT FOUND')
}

export const createCustomUrl = async (req, res, next) => {
    try {
        const { url, slug } = req.body
        const baseUrl = getPublicBaseUrl();
        const shortUrl = await shortUrlServiceUser(url, req.user._id, slug)
        res.status(200).json({ shortUrl: `${baseUrl}/${shortUrl}` })
    } catch (error) {
        next(error)
    }
}






