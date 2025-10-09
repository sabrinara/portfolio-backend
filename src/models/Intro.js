import mongoose from 'mongoose';

const IntroSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  smallDetails: { type: String, required: true },
  image: { type: String },
  about_content: { type: String },
});

const Intro = mongoose.model('Intro', IntroSchema);
export default Intro;
