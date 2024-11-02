import { Task } from "../models/task.models";

const create = async (req, res) => {
  const task = await Task.create(req.body.data);

  res.send(task);
};

const read = async (req, res) => {
  const tasks = await Task.find({});

  res.send(tasks);
};

const update = async (req, res) => {
  const id = req.params.id;
  const update = await Task.findByIdAndUpdate(id, req.body.updateData);
  res.send(update);
};

export { create, read, update };
