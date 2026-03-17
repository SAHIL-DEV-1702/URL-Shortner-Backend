
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: [true, 'email must required']
        },
        contactNo: {
            type: Number,
        },
        username: {
            type: String,
        },
        password: {
            type: String,
            require: [true, "password must required"]
        },


    },
    { timestamps: true }
)

export const userModel = mongoose.model("userModel", userSchema)