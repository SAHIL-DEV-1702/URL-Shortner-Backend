import { shortUrlServiceNoUser } from '../sevices/shortUrl.service.js'
export const createShortUrl = async (req, res) => {

    const { url } = req.body;
    const shortUrl = await shortUrlServiceNoUser(url)
    res.send(process.env.APP_URL + "/" + shortUrl)
}