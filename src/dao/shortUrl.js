import shortUrlModel from "../models/shorturl.model.js";

export const saveShortUrl = async (short_url, originalUrl, userId) => {
    try {
        const newUrl = new shortUrlModel({
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
    return await shortUrlModel.findOne({ short_url: slug })

}