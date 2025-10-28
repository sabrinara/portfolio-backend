import { Document } from "mongoose";

export interface ISocialLink {
  icon: string;
  title: string;
  url: string;
}



export interface IIntro extends Document {
  name: string;
  role: string;
  smallDetails: string;
  image?: string;
  about_content?: string;
  resume?: string;
  socialLinks: ISocialLink[];
}
