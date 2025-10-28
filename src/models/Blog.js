import { Schema, model } from 'mongoose';

const BlogSchema = new Schema({
  date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String },
  details: { type: String },
  view: { type: Number, default: 0 }, 
  tags: { type: [String], default: [] }
});

export default model('Blog', BlogSchema);
