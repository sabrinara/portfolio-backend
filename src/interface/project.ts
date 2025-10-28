import { Document, Types } from "mongoose";

export interface IKeyFeature {
  title: string;
  image: string;
  details: string;
}

export interface IProject extends Document {
  title: string;
  imageArray: string[];
  type: "company" | "team" | "personal";
  technologyType?: string;
  subTitle?: string;
  description?: string;
  keyFeatures: IKeyFeature[];
  technologies: string[];
  date?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
