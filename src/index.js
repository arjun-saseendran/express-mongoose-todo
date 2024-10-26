import express from "express";
import cors from "cors";
import TaskRouter from "../src/routes/task.routes.js";
import  connectDB  from "./db/db.connection.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB()
  .then(() => console.log("MongoDB connected "))
  .catch((error) => console.log("MongoDB connection error ", error));

app.use(cors({ origin: process.env.CORS, credentials: true }));

app.use(express.json());
app.use("/task", TaskRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
