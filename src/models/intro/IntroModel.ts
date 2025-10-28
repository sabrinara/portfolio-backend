import mongoose, { Document, Schema } from "mongoose";
import { IIntro, ISocialLink } from "./intro";



const SocialLinkSchema = new Schema<ISocialLink>({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
});

const IntroSchema = new Schema<IIntro>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    smallDetails: { type: String, required: true },
    image: { type: String },
    about_content: { type: String },
    resume: { type: String },
    socialLinks: [SocialLinkSchema],
  },
  { timestamps: true }
);

export default mongoose.model<IIntro>("Intro", IntroSchema);
