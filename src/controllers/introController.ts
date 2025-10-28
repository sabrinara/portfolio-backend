import { Request, Response } from "express";
import Intro from "../models/intro/IntroModel.js";

export const getIntro = async (req: Request, res: Response): Promise<void> => {
  const data = await Intro.find();
  res.json(data);
};

export const createIntro = async (req: Request, res: Response): Promise<void> => {
  const item = new Intro(req.body);
  await item.save();
  res.status(201).json(item);
};

export const updateIntro = async (req: Request, res: Response): Promise<void> => {
  const updated = await Intro.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteIntro = async (req: Request, res: Response): Promise<void> => {
  await Intro.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
