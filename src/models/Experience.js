import { Schema, model } from 'mongoose';

const ExperienceSchema = new Schema(
  {
    title: { type: String },
    subTitle: {type: String},
    about: { type: String },
    startDate: { type: Date },
    // ✅ Allow both Date and String (e.g., "Present")
    endDate: { 
      type: Schema.Types.Mixed 
    },
    type: { type: String, enum: ['company', 'team','course'], default: 'company' },
    technologies: [{ type: String }],
    certificateUrl: { type: String },
    url: { type: String },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    resumeUrl: { type: String },
  },
  { timestamps: true }
);

export default model('Experience', ExperienceSchema);
