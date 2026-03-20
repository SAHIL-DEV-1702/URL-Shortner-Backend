import { getCustomShorturl, saveShortUrl } from "../dao/shortUrl.js"
import { genrateId } from "../utils/helper.js"



export const shortUrlServiceNoUser = async (url) => {
    try {
        const shortUrl = genrateId(7)
        if (!shortUrl) throw new Error("Short Url Not Generated")
        await saveShortUrl(shortUrl, url)
        return shortUrl
    } catch (error) {
        throw new Error(`Error in shortUrlServiceNoUser: ${error.message}`)
    }
}

export const shortUrlServiceUser = async (url, userId, slug = null) => {
    try {
        const shortUrl = slug || genrateId(7)
        console.log('short', shortUrl)
        const exists = await getCustomShorturl(slug)
        if (exists) throw new Error("this custom url already exists")

        await saveShortUrl(shortUrl, url, userId)
        return shortUrl

    } catch (error) {
        throw new Error(`Error in shortUrlServiceUser: ${error.message}`)
    }
}


