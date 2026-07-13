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
        const normalizedSlug = slug ? slug.trim().toLowerCase() : null
        const shortUrl = normalizedSlug || genrateId(7)

        if (normalizedSlug) {
            const exists = await getCustomShorturl(normalizedSlug)
            if (exists) {
                throw new Error('This custom URL already exists')
            }
        }

        const saved = await saveShortUrl(shortUrl, url, userId, { user: userId, slug: normalizedSlug })
        if (normalizedSlug && !saved.customSlug) {
            saved.customSlug = normalizedSlug;
            await saved.save();
        }
        return shortUrl

    } catch (error) {
        throw new Error(`Error in shortUrlServiceUser: ${error.message}`)
    }
}

