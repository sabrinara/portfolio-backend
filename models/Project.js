import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    details: { type: String, required: true },

    functionalityDetails: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],

    images: [{ type: String }], // Array of image URLs

    technologies: [{ type: String }], // Example: ["React", "Node.js", "MongoDB"]

    githubLink: { type: String },
    liveLink: { type: String },
    clientLink: { type: String },
    serverLink: { type: String },

    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProjectType",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
