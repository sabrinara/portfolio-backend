import Achievement from '../models/Achievement.js';

// ✅ Get all achievements
export async function getAchievements(req, res) {
  try {
    const data = await Achievement.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// ✅ Create a new achievement
export async function createAchievement(req, res) {
  try {
    const item = new Achievement(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// ✨ Update an achievement
export async function updateAchievement(req, res) {
  try {
    const { id } = req.params;
    const updated = await Achievement.findByIdAndUpdate(id, req.body, {
      new: true, // return updated doc
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// 🗑️ Delete an achievement
export async function deleteAchievement(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Achievement.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Achievement not found' });
    }

    res.json({ message: 'Achievement deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
