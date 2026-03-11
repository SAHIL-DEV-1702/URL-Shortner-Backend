import urlSchema from '../models/shortUrl.model.js'

export const saveShortUrl = async (shortUrl, orignalUrl, userId) => {
    const newUrl = new urlSchema(
        {
            orignal_Url: orignalUrl,
            short_Url: shortUrl,
        }
    )
    if (userId) {
        newUrl.user_id = userId
    }
    newUrl.save
}