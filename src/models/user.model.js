
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            required: [true, 'email must required']
        },
        password: {
            type: String,
            required: [true, "password must required"]
        },
    },
    { timestamps: true }
)

export default mongoose.model("userModel", userSchema)