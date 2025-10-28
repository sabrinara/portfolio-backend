import express from "express";
import {
  getAchievements,
  createAchievement,
  updateAchievement,
  deleteAchievement,
} from "../controllers/achievementController.ts";
import auth from "../middleware/authMiddleware.ts";

const router = express.Router();

router.get("/", getAchievements);
router.post("/", auth, createAchievement);
router.put("/:id", auth, updateAchievement);
router.delete("/:id", auth, deleteAchievement);

export default router;
