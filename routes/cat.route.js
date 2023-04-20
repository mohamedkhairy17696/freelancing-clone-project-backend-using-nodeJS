import express from "express";
import {
  createNewCat,
  deleteCat,
  getCat,
  getCats,
} from "../controllers/cat.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.post("/", createNewCat);
router.delete("/:id", deleteCat);
router.get("/single/:id", getCat);
router.get("/", getCats);

export default router;
