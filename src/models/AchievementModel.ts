import { Schema, model, Document } from "mongoose";
import { IAchievement } from "../interface/achievement.ts";

export interface IAchievementDocument extends IAchievement, Document {}

const AchievementSchema = new Schema<IAchievementDocument>(
  {
    title: { type: String, required: true },
    details: { type: String, required: true },
    image: { type: String },
    type: {
      type: String,
      enum: ["contest", "course"],
      default: "course",
      required: true,
    },
    date: { type: Date },
  },
  { timestamps: true }
);

const Achievement = model<IAchievementDocument>("Achievement", AchievementSchema);
export default Achievement;
