import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';
import { getExperiences, createExperience, updateExperience, deleteExperience } from '../controllers/experienceController.js';


router.get('/', getExperiences);
router.post('/', auth, createExperience);
router.put('/:id', auth, updateExperience);
router.delete('/:id', auth, deleteExperience);


export default router;