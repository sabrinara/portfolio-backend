import { Schema, model } from 'mongoose';


const BlogSchema = new Schema({
date: { type: Date },
title: { type: String },
url: { type: String },
image: { type: String },
details: { type: String },
});


export default model('Blog', BlogSchema);