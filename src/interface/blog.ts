import { Document } from "mongoose";

export interface IBlog extends Document {
  date?: Date;
  title: string;
  url: string;
  image?: string;
  details?: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
