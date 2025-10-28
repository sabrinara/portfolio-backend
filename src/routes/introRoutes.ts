import express from "express";
import { getIntro, createIntro, updateIntro, deleteIntro } from "../controllers/introController.ts";
import auth from "../middleware/authMiddleware.ts";

const router = express.Router();

router.get("/", getIntro);
router.post("/", auth, createIntro);
router.put("/:id", auth, updateIntro);
router.delete("/:id", auth, deleteIntro);

export default router;
