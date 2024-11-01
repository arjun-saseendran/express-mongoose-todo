import { Task } from "../models/task.models";

const create = async (req, res) => {
  const task = await Task.create(req.body.data);

  res.send(task);
};

const read = async (req, res) => {
  const tasks = await Task.find({});

  res.send(tasks);
};

export { create, read };
