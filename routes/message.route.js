import express from "express";
import {
  createNewMessage,
  getMessages,
} from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.post("/", verifyToken, createNewMessage);
router.get("/:id", verifyToken, getMessages);

export default router;
