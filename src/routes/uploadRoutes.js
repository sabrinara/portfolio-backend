import express from 'express';
import multer from 'multer';
import auth from '../middleware/auth.js';
import { uploadImage } from '../controllers/uploadController.js';

const router = express.Router();

// Use memory storage — no file system needed
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/image', auth, upload.single('image'), uploadImage);

export default router;
