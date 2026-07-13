import shortUrlModel from "../models/shorturl.model.js";

export const saveShortUrl = async (short_url, originalUrl, userId, meta = {}) => {
    try {
        const newUrl = new shortUrlModel({
            short_url: short_url,
            originalUrl: originalUrl,
        });

        if (userId) {
            newUrl.user = userId;
        }

        if (meta.slug) {
            newUrl.customSlug = meta.slug;
        }

        await newUrl.save();


    } catch (error) {
        console.error('Error saving short URL:', error);
        throw error;
    }
}

export const getCustomShorturl = async (slug) => {
    return await shortUrlModel.findOne({
        $or: [{ short_url: slug }, { customSlug: slug }]
    })
}