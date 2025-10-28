import { Request, Response } from "express";
import Blog from "../models/BlogModel.ts";
import { IBlog } from "../interface/blog.ts";

// ✅ Get all blogs
export const getBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await Blog.find();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get single blog
export const getBlogById = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await Blog.findById(req.params.id);
    if (!data) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Create blog
export const createBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const item: IBlog = req.body;
    const newBlog = new Blog(item);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update blog
export const updateBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }
    res.json(updated);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete blog
export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }
    res.json({ message: "Deleted" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
