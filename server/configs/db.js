import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> console.log("Database connected Successfully !!"))
        await mongoose.connect(`${process.env.MONGODB_URI}/greenCart`)
    } catch (error) {
        console.log("Database connection error message"+error.message)
    }
}

export default connectDB;