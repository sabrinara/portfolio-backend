import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';
import { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../controllers/blogController.js';


router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.post('/', auth, createBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);


export default router;