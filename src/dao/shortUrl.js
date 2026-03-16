import urlModel from '../models/shortUrl.model.js'

export const saveShortUrl = async (short_url, originalUrl, userId) => {
    const newUrl = new urlModel(
        {
            short_url: short_url,
            originalUrl: originalUrl,

        }
    )
    if (userId) {
        newUrl.user_id = userId
    }
    newUrl.save()
}