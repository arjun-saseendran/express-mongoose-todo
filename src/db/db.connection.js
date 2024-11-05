import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../../constants.js";

dotenv.config({ path: "./.env" });

async function connectDB() {
  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
}

export default connectDB;
