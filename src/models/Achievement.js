import { Schema, model } from 'mongoose';

const AchievementSchema = new Schema({

    title: { type: String },
    details: { type: String },
    image: { type: String },
    type: { type: String, enum: ['Programming Contest', 'Course' , 'Contest'], default: 'Course' },
    date: { type: Date },
});


export default model('Achievement', AchievementSchema);