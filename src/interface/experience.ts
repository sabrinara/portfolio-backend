import { Types } from "mongoose";

export interface IExperience {
  title?: string;
  about?: string;
  startDate?: Date;
  endDate?: Date;
  type?: "company" | "team";
  technologies?: string[];
  certificateUrl?: string;
  url?: string;
  projects?: Types.ObjectId[];
  resumeUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
