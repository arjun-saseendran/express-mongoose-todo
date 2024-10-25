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

const tasks = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Task = mongoose.model("Task", tasks);

app.get("/", async (req, res) => {
  const tasks = await Task.find({});

  res.send(tasks);
});
app.post("/", async (req, res) => {
  const task = await Task.create(req.body.data);

  res.send(task);
});
app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const update = await Task.findByIdAndUpdate(id, req.body.updateData);
  res.send(update);
});
app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleted = await Task.findByIdAndDelete(id);

  res.send(deleted);
});

app.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const update = await Task.findByIdAndUpdate(id, req.body.complete);
  res.send(update);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
