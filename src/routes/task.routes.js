import { Router } from "express";
import { Task } from "../models/task.models.js";
import { create, read, update } from "../controllers/task.controllers.js";

const router = Router();

router.get("/", read);
router.post("/", create);
router.put("/:id", update)

router.delete("/:id")async (req, res) => {
  const id = req.params.id;
  const deleted = await Task.findByIdAndDelete(id);

  res.send(deleted);
};

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const update = await Task.findByIdAndUpdate(id, req.body.complete);
  res.send(update);
});

export default router;
