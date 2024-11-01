import { Task } from "../models/task.models";

export const create = async (req, res) => {
  const task = await Task.create(req.body.data);

  res.send(task);
};
