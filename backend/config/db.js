import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(`Mongo DB connected: ${conn.connection.host}`.green.italic)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.inverse)
        process.exit(1)
    }
}

export default connectDB