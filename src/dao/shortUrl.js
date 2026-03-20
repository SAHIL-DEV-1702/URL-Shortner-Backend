import urlModel from '../models/shortUrl.model.js'

export const saveShortUrl = async (short_url, originalUrl, userId) => {
    try {
        const newUrl = new urlModel({
            short_url: short_url,
            originalUrl: originalUrl,
        });

        if (userId) {
            newUrl.user = userId;
        }
        await newUrl.save();


    } catch (error) {
        console.error('Error saving short URL:', error);
        throw error;
    }
}

export const getCustomShorturl = async (slug) => {
    return await urlModel.findOne({ short_url: slug })

}