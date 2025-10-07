import mongoose from "mongoose";

const projectTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // e.g. Personal, Team, Job, Others
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProjectType", projectTypeSchema);
