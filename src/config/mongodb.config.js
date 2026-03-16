import mongoose from 'mongoose';


const connectDb = () => {

    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
        console.log('MONGODB Connected successfully ✅')
    } catch (error) {
        console.log('Error To connect Database💀❌')
        process.exit(1);
    }

}

export default connectDb;