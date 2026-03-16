import { saveShortUrl } from "../dao/shortUrl.js"
import { genrateId } from "../utils/helper.js"


export const shortUrlServiceNoUser = async (url) => {

    const shortUrl = await genrateId(7)
    await saveShortUrl(shortUrl, url)
    return shortUrl
}


export const shortUrlServiceUser = async (url, userId) => {

    const shortUrl = await genrateId(7)
    await saveShortUrl(shortUrl, url, userId)
    return shortUrl
}