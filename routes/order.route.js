import express from "express";
const router = express.Router();
import { createOrder, getOrders } from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/jwt.js";

router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;
