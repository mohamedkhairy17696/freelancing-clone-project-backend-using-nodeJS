import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.delete("/:id", deleteUser);
router.get("/:id", verifyToken, getUser);
router.get("/", getUsers);

export default router;
