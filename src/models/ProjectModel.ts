import { Schema, model } from "mongoose";
import { IProject } from "../interface/project.ts";

const KeyFeatureSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  details: { type: String },
});

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    imageArray: [{ type: String }],
    type: {
      type: String,
      enum: ["company", "team", "personal"],
      default: "personal",
    },
    technologyType: { type: String },
    subTitle: { type: String },
    description: { type: String },
    keyFeatures: [KeyFeatureSchema],
    technologies: [{ type: String }],
    date: { type: Date },
  },
  { timestamps: true }
);

export default model<IProject>("Project", ProjectSchema);
