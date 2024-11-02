import { Router } from "express";
import {
  createTask,
  readTask,
  updateTask,
  deleteTask,
  setTaskComplete,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/", readTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id", setTaskComplete);

export default router;
