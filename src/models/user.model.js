
import mongoose from 'mongoose'
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name must required']
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

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
})

export default mongoose.model("userModel", userSchema)