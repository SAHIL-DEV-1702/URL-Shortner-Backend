import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema(
    {
        originalUrl: {
            type: String,
            required: true,
        },
        short_url: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        clicks: {
            type: Number,
            required: true,
            default: 0
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userModel"
        },
        customSlug: {
            type: String,
            default: null
        }

    },
    { timestamps: true }
)


const shortUrlModel = mongoose.models.shortUrlModel
    || mongoose.model("shortUrlModel", urlSchema)

export default shortUrlModel