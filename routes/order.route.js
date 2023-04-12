import express from "express";
const router = express.Router();
import { fn } from "../controllers/order.controller.js";

router.get("/test", fn);

export default router;
