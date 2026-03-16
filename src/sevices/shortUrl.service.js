import { saveShortUrl } from "../dao/shortUrl.js"
import { genrateId } from "../utils/helper.js"


export const shortUrlServiceNoUser = async (url) => {
    try {
        const shortUrl = await genrateId(7)
        if (!shortUrl) throw new Error("Short Url Not Generated")
        await saveShortUrl(shortUrl, url)
        return shortUrl
    } catch (error) {
        throw new Error(`Error in shortUrlServiceNoUser: ${error.message}`)
    }
}


export const shortUrlServiceUser = async (url, userId) => {
    try {
        const shortUrl = await genrateId(7)
        await saveShortUrl(shortUrl, url, userId)
        return shortUrl
    } catch (error) {
        throw new Error(`Error in shortUrlServiceUser: ${error.message}`)
    }
}