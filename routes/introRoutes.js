import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';
import { getIntro, createIntro, updateIntro, deleteIntro } from '../controllers/introController.js';


router.get('/', getIntro);
router.post('/', auth, createIntro);
router.put('/:id', auth, updateIntro);
router.delete('/:id', auth, deleteIntro);


export default router;