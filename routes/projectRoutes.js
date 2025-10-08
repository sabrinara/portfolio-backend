import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';
import { getProjects, getProjectById, createProject, updateProject, deleteProject } from '../controllers/projectController.js';


router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', auth, createProject);
router.put('/:id', auth, updateProject);
router.delete('/:id', auth, deleteProject);


export default router;