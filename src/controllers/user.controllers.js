import { User } from "../models/user.models.js";

const createUser = async (req, res) => {
  const user = await User.create(req.body.data);
  res.send(user);
};

export { createUser };
