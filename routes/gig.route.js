import express from "express";
const router = express.Router();
import {
  createNewGig,
  deleteGig,
  getGig,
  getGigs,
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

router.post("/", verifyToken, createNewGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", verifyToken, getGig);
router.get("/", verifyToken, getGigs);

export default router;
