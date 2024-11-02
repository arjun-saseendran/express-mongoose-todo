import { Router } from "express";
import { Task } from "../models/task.models.js";
import {
  createTask,
  readTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/", readTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const update = await Task.findByIdAndUpdate(id, req.body.complete);
  res.send(update);
});

export default router;
