import { Schema, model } from 'mongoose';

const KeyFeatureSchema = new Schema({
  title: String,
  image: String,
  details: String,
});

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  imageArray: [{ type: String }],
  type: { type: String, enum: ['company', 'team', 'personal'], default: 'personal' },
  category: { type: String, enum: ['Full Stack', 'Frontend', 'Backend', 'Django', 'MERN'], default: 'Full Stack' },
  technologyType: { type: String },
  subTitle: { type: String },
  description: { type: String },
  keyFeatures: [KeyFeatureSchema],
  technologies: [{ type: String }],
  date: { type: Date },
}, { timestamps: true });

export default model('Project', ProjectSchema);
