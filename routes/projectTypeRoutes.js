import express from "express";
import { createProjectType, getProjectTypes } from "../controllers/projectTypeController.js";

const router = express.Router();

router.post("/", createProjectType);
router.get("/", getProjectTypes);

export default router;
