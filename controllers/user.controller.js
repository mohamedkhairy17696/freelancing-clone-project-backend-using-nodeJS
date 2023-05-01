import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    await User.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!mongoose.Types.ObjectId.isValid(id)) return false;

    if (!user) {
      next(createError(404, "user not found!"));
    }
    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      next(createError(404, "user not found!"));
    }
    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};
