import { Request, Response } from "express";
import Project from "../models/ProjectModel.ts";
import { IProject } from "../interface/project.ts";

// ✅ GET all projects
export const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await Project.find();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET single project by ID
export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await Project.findById(req.params.id);
    if (!data) {
      res.status(404).json({ message: "Project not found" });
      return;
    }
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ CREATE new project
export const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const item: IProject = req.body;
    const newProject = new Project(item);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ UPDATE project
export const updateProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ message: "Project not found" });
      return;
    }
    res.json(updated);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ DELETE project
export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ message: "Project not found" });
      return;
    }
    res.json({ message: "Deleted" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
