import express from "express";
import cors from "cors";
import TaskRouter from "../src/routes/task.routes";
import { connectDB } from "./db/db.connection";

const app = express();
const port = process.env.PORT || 4000;

connectDB()
  .then((response) => console.log("MongoDB connected ", response))
  .catch((error) => console.log("MongoDB connection error ", error));

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use("/task", TaskRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
