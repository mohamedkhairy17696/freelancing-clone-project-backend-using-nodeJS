import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import validator from "validator";

export const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).send("user has been created");
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) {
      return res.status(404).send("Wrong password or username");
    }

    const { password, ...info } = user._doc;
    res.status(200).send(info);
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

export const logout = async (req, res) => {
  res.send("From Auth Controller");
};
