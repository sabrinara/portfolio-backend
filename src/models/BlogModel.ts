import { Schema, model } from "mongoose";
import { IBlog } from "../interface/blog.ts";

const BlogSchema = new Schema<IBlog>(
  {
    date: { type: Date, default: Date.now },
    title: { type: String, required: true },
    url: { type: String, required: true },
    image: { type: String },
    details: { type: String },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default model<IBlog>("Blog", BlogSchema);
