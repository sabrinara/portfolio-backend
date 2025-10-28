import express from "express";
import {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/experienceController.ts";
import auth from "../middleware/authMiddleware.ts";

const router = express.Router();

router.get("/", getExperiences);
router.post("/", auth, createExperience);
router.put("/:id", auth, updateExperience);
router.delete("/:id", auth, deleteExperience);

export default router;
