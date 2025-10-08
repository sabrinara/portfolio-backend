import cloudinary from '../config/cloudinary.js';
import fs from 'fs';

export async function uploadImage(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file provided' });
    }

    // Upload directly from local path (multer stores the file temporarily)
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'portfolio',
    });

    // Remove temp file after upload
    fs.unlinkSync(req.file.path);

    res.json({ url: result.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
}
