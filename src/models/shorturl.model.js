import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema(
    {
        originalUrl: {
            type: String,
            require: true
        },
        short_url: {
            type: String,
            requied: true,
            index: true,
            unique:true
        },
        clicks: {
            type: Number,
            requied: true,
            default: 0
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",

        }

    },
    { timestamps: true }
)

const urlModel = mongoose.model("urlModel", urlSchema)
export default urlModel