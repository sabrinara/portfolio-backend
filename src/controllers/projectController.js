import Project from '../models/Project.js';

// GET all projects
export async function getProjects(req, res) {
  try {
    const projects = await Project.find();

    // Add counts dynamically
    const dataWithCounts = projects.map((p) => ({
      ...p.toObject(),
      totalKeyFeaturesCount: p.keyFeatures?.length || 0,
      totalTechnologyCount: p.technologies?.length || 0,
    }));

    res.json(dataWithCounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// GET single project by ID
export async function getProjectById(req, res) {
  try {
    const p = await Project.findById(req.params.id);
    if (!p) return res.status(404).json({ message: 'Project not found' });

    // Add counts
    const dataWithCounts = {
      ...p.toObject(),
      totalKeyFeaturesCount: p.keyFeatures?.length || 0,
      totalTechnologyCount: p.technologies?.length || 0,
    };

    res.json(dataWithCounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// CREATE a new project
export async function createProject(req, res) {
  try {
    const item = new Project(req.body);
    await item.save();

    const dataWithCounts = {
      ...item.toObject(),
      totalKeyFeaturesCount: item.keyFeatures?.length || 0,
      totalTechnologyCount: item.technologies?.length || 0,
    };

    res.status(201).json(dataWithCounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// UPDATE project by ID
export async function updateProject(req, res) {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Project not found' });

    const dataWithCounts = {
      ...updated.toObject(),
      totalKeyFeaturesCount: updated.keyFeatures?.length || 0,
      totalTechnologyCount: updated.technologies?.length || 0,
    };

    res.json(dataWithCounts);
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
