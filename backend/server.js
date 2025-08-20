import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';
import leaderboardRoutes from './routes/leaderboard.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL?.split(',') || true, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/', (_, res) => res.json({ status: 'TaskHub API ok' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// Start
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 TaskHub API running: http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });
