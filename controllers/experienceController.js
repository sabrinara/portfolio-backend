import Experience from '../models/Experience.js';

// ✅ Get all experiences
export async function getExperiences(req, res) {
  try {
    const data = await Experience.find().populate('projects');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// ✅ Create a new experience
export async function createExperience(req, res) {
  try {
    const item = new Experience(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// ✅ Update experience by ID
export async function updateExperience(req, res) {
  try {
    const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Experience not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// ✅ Delete experience by ID
export async function deleteExperience(req, res) {
  try {
    const deleted = await Experience.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Experience not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
