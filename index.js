import express from "express";
import cors from "cors";
import TaskRouter from "./src/routes/task.routes.js";
import connectDB from "./src/db/db.connection.js";
import dotenv from "dotenv";

app.use(
  cors({
    origin: process.env.CORS,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cors(corsOptions));

const app = express();
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 4000;

connectDB()
  .then(() => console.log("MongoDB connected "))
  .catch((error) => console.log("MongoDB connection error ", error));

app.use(express.json());
app.use("/task", TaskRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
