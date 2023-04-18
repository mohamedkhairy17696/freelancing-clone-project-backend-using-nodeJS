import express from "express";
const router = express.Router();
import {
  createNewCat,
  deleteCat,
  getCat,
  getCats,
} from "../controllers/cat.controller.js";
import { verifyToken } from "../middleware/jwt.js";

router.post("/", createNewCat);
router.delete("/:id", deleteCat);
router.get("/single/:id", getCat);
router.get("/", getCats);

export default router;
