import mongoose from "mongoose";

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URL);
}


export {connectDB}
