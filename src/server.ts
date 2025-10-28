import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

// Route imports
import authRoutes from './routes/authRoutes.ts';
import introRoutes from './routes/introRoutes.ts';
import experienceRoutes from './routes/experienceRoutes.ts';
import projectRoutes from './routes/projectRoutes.ts';
import achievementRoutes from './routes/achievementRoutes.ts';
import blogRoutes from './routes/blogRoutes.ts';
import uploadRoutes from './routes/uploadRoutes.ts';
import connectDB from "./config/db.ts";

dotenv.config();

// Middleware
const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/intro', introRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Portfolio Backend is running!');
});
app.get('/api', (req, res) => {
  res.send('🚀 Portfolio Backend api is running!');
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


export default app;