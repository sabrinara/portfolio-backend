import express from 'express';
const router = express.Router();
import multer, { diskStorage } from 'multer';
import { extname } from 'path';
import auth from '../middleware/auth.js';
import { uploadImage } from '../controllers/uploadController.js';


// Multer setup - store uploads in /tmp/uploads (ensure this folder exists)
const storage = diskStorage({
destination: function (req, file, cb) {
cb(null, 'tmp');
},
filename: function (req, file, cb) {
cb(null, Date.now() + extname(file.originalname));
}
});
const upload = multer({ storage });


router.post('/image', auth, upload.single('image'), uploadImage);


export default router;