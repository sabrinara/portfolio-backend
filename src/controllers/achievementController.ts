import { Request, Response } from "express";
import Achievement from "../models/AchievementModel.ts";
import { IAchievement } from "../interface/achievement.ts";

/**
 * 📥 Get all achievements
 */
export const getAchievements = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await Achievement.find();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * 🆕 Create a new achievement
 */
export const createAchievement = async (req: Request, res: Response): Promise<void> => {
  try {
    const newItem: IAchievement = req.body;
    const item = new Achievement(newItem);
    await item.save();
    res.status(201).json(item);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * ✍️ Update an achievement by ID
 */
export const updateAchievement = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedItem: IAchievement | null = await Achievement.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      res.status(404).json({ message: "Achievement not found" });
      return;
    }

    res.json(updatedItem);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * 🗑️ Delete an achievement by ID
 */
export const deleteAchievement = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedItem = await Achievement.findByIdAndDelete(id);

    if (!deletedItem) {
      res.status(404).json({ message: "Achievement not found" });
      return;
    }

    res.json({ message: "Achievement deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
