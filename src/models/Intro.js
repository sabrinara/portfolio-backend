import mongoose from "mongoose";

const socialLinkSchema = new mongoose.Schema({
  icon: { type: String, required: true }, 
  title: { type: String, required: true }, 
  url: { type: String, required: true },
});

const introSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    smallDetails: { type: String, required: true },
    image: { type: String }, 
    about_content: { type: String },
    resume:{ type:String},
    socialLinks: [socialLinkSchema],
  },
  { timestamps: true }
);

const Intro = mongoose.model("Intro", introSchema);
export default Intro;
