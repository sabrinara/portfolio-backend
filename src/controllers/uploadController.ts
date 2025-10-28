import { Request, Response } from "express";
import cloudinary from "../config/cloudinary.ts";
import fs from "fs";
import path from "path";

export const uploadImage = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No image uploaded" });
      return;
    }

    const filePath = path.resolve(req.file.path);

    // ✅ Upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "uploads",
    });

    // ✅ Remove the temporary file after upload
    fs.unlinkSync(filePath);

    res.status(200).json({
      message: "Image uploaded successfully",
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
