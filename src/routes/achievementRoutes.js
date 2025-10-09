import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';
import { getAchievements, createAchievement } from '../controllers/achievementController.js';


router.get('/', getAchievements);
router.post('/', auth, createAchievement);


export default router;