import Project from '../models/Project.js';

// GET all projects
export async function getProjects(req, res) {
  try {
    const data = await Project.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// GET single project by ID
export async function getProjectById(req, res) {
  try {
    const data = await Project.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Project not found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// CREATE a new project
export async function createProject(req, res) {
  try {
    const item = new Project(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// UPDATE project by ID
export async function updateProject(req, res) {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Project not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// DELETE project by ID
export async function deleteProject(req, res) {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
