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
  res.send("From Auth Controller");
};

export const logout = async (req, res) => {
  res.send("From Auth Controller");
};
