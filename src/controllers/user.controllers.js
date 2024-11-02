import { User } from "../models/user.models";

const createUser = async (req, res) => {
  const user = await User.create(req.body.data);
  res.send(user);
};

export { createUser };
