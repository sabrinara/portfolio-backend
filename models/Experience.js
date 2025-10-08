import { Schema, model } from 'mongoose';

const ExperienceSchema = new Schema({
  title: { type: String },
  about: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  type: { type: String, enum: ['company', 'team'], default: 'company' },
  technologies: [{ type: String }],
  certificateUrl: { type: String },
  url: { type: String },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  resumeUrl: { type: String },
}, { timestamps: true });

export default model('Experience', ExperienceSchema);
