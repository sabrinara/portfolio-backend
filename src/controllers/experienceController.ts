import { Request, Response } from "express";
import Experience from "../models/ExperienceModel.ts";
import { IExperience } from "../interface/experience.ts";

/**
 * 📥 Get all experiences
 */
export const getExperiences = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await Experience.find().populate("projects");
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * 🆕 Create a new experience
 */
export const createExperience = async (req: Request, res: Response): Promise<void> => {
  try {
    const newItem: IExperience = req.body;
    const item = new Experience(newItem);
    await item.save();
    res.status(201).json(item);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * ✍️ Update experience by ID
 */
export const updateExperience = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updated = await Experience.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      res.status(404).json({ message: "Experience not found" });
      return;
    }
    res.json(updated);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * 🗑️ Delete experience by ID
 */
export const deleteExperience = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Experience.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: "Experience not found" });
      return;
    }
    res.json({ message: "Deleted" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
