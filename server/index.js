import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';
const distPath = path.resolve(process.cwd(), 'dist');

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Joel portfolio API is running',
  });
});

app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Joel Kurien Thomas',
    role: 'Data Science • AI • Python',
    tagline: 'BCA graduate and Data Science intern building practical skills across AI, data, and software development.',
    github: 'https://github.com/joelkurien13',
    linkedin: 'https://www.linkedin.com/in/joel-kurien-thomas/',
  });
});

if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error.message));
}

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }

    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ message: 'API endpoint not found' });
    }

    res.json({
      message: 'Client build not found. Run npm run build to generate the frontend.',
    });
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
