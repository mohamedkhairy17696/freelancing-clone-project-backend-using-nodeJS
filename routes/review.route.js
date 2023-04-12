import express from "express";
const router = express.Router();
import { fn } from "../controllers/review.controller.js";

router.get("/test", fn);

export default router;
