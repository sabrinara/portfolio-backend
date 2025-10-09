import Intro from '../models/Intro.js';

export async function getIntro(req, res) {
  const data = await Intro.find();
  res.json(data);
}

export async function createIntro(req, res) {
  const item = new Intro(req.body);
  await item.save();
  res.status(201).json(item);
}

export async function updateIntro(req, res) {
  const updated = await Intro.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
}

export async function deleteIntro(req, res) {
  await Intro.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
}
