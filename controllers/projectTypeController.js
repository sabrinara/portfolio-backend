import ProjectType from "../models/ProjectType.js";

export const createProjectType = async (req, res) => {
  try {
    const type = await ProjectType.create(req.body);
    res.status(201).json(type);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProjectTypes = async (req, res) => {
  try {
    const types = await ProjectType.find();
    res.json(types);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
