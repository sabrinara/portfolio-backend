import { Schema, model } from 'mongoose';

const KeyFeatureSchema = new Schema({
  title: { type: String },
  image: { type: String },
  details: { type: String },
});

// ✅ New schema for URLs
const UrlSchema = new Schema({
  website: { type: String, required: true },
  frontend: { type: String },
  backend: { type: String },
});

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    imageArray: [{ type: String }],
    type: {
      type: String,
      enum: ['Company', 'Team', 'Personal'],
      default: 'Personal',
    },
    category: {
      type: String,
      enum: ['Full Stack', 'Frontend', 'Backend', 'Django', 'MERN'],
      default: 'Full Stack',
    },
    technologyType: { type: String },
    subTitle: { type: String },
    description: { type: String },
    keyFeatures: [KeyFeatureSchema],
    technologies: [{ type: String }],
    urls: [UrlSchema], // ✅ Added URL array
    date: { type: Date },
    featuredProject: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model('Project', ProjectSchema);
