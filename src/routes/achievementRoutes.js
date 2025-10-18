import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';
import { getAchievements, createAchievement, updateAchievement, deleteAchievement } from '../controllers/achievementController.js';


router.get('/', getAchievements);
router.post('/', auth, createAchievement);
router.put('/:id', auth, updateAchievement);
router.delete('/:id', auth, deleteAchievement);


export default router;