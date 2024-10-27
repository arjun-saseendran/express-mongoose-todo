import { Router } from "express";
import { Task } from "../models/task.models.js";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find({});

  res.send(tasks);
});
router.post("/", async (req, res) => {
  const task = await Task.create(req.body.data);

  res.send(task);
});
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const update = await Task.findByIdAndUpdate(id, req.body.updateData);
  res.send(update);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleted = await Task.findByIdAndDelete(id);

  res.send(deleted);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const update = await Task.findByIdAndUpdate(id, req.body.complete);
  res.send(update);
});

export default router;
