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
            minlength: [8, "password must be at least 8 characters"]
        },
    },
    { timestamps: true }
);


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);

    next();
});

export default mongoose.model("userModel", userSchema);