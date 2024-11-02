import { Task } from "../models/task.models.js";

const createTask = async (req, res) => {
  const task = await Task.create(req.body.data);
  res.send(task);
};

const readTask = async (req, res) => {
  const tasks = await Task.find({});
  res.send(tasks);
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  const update = await Task.findByIdAndUpdate(id, req.body.updateData);
  res.send(update);
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  const deleted = await Task.findByIdAndDelete(id);
  res.send(deleted);
};

const setTaskComplete = async (req, res) => {
  const id = req.params.id;
  const update = await Task.findByIdAndUpdate(id, req.body.complete);
  res.send(update);
};

export { createTask, readTask, updateTask, deleteTask, setTaskComplete };
