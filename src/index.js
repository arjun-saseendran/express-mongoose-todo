import express from "express";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors({origin: 'http://localhost:5173', credentials: true}))

app.use(express.json());

async function main() {
  await mongoose.connect(
    "mongodb+srv://testuser:ERDBWsR9Zco13Psu@cluster0.jato0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

main()
  .then(() => console.log("Mongodb conneted"))
  .catch((error) => console.log("Mongodb connection error ", error));






app.listen(port, () => console.log(`Server running on port ${port}`));
