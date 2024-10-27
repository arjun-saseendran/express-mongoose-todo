import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({path:'./.env'})

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URL);
}


export default connectDB
