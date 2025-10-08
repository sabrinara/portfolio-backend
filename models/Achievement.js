import { Schema, model } from 'mongoose';

const AchievementSchema = new Schema({

    title: { type: String },
    details: { type: String },
    image: { type: String },
    type: { type: String, enum: ['contest', 'course'], default: 'course' },
    date: { type: Date },
});


export default model('Achievement', AchievementSchema);