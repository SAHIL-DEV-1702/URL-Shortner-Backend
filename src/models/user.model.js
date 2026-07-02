import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name must required'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'email must required'],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "password must required"],
            minlength: [8, "password must be at least 8 characters"],
            select: false
        },
    },
    { timestamps: true }
);


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.model("userModel", userSchema);