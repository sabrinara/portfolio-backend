import Achievement from '../models/Achievement.js';


export async function getAchievements(req, res) {
    try {
        const data = await Achievement.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export async function createAchievement(req, res) {
    try {
        const item = new Achievement(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}