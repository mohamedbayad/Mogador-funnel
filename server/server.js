import express from 'express';
import fs from 'fs';
import dotenv from 'dotenv';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000; // fallback 3000

const JSON_FILE = path.join(__dirname, '..', 'offerTiming.json'); // adjust file path
const AUTH_TOKEN = process.env.AUTH_TOKEN;

app.use(express.json());

// Serve static files from dist/
app.use(express.static(path.join(__dirname, '..', 'dist')));

// API endpoints
app.get('/endtime', (req, res) => {
  if (fs.existsSync(JSON_FILE)) {
    const data = fs.readFileSync(JSON_FILE, 'utf8');
    res.json(JSON.parse(data));
  } else {
    res.json({ endTime: null });
  }
});

app.post('/endtime', (req, res) => {
  const auth = req.headers['authorization'];
  if (auth !== `Bearer ${AUTH_TOKEN}`) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  const { endTime } = req.body;
  fs.writeFileSync(JSON_FILE, JSON.stringify({ endTime }));
  res.json({ status: 'saved', endTime });
});

// Catch-all route
app.get('/{*any}', (req, res) => {
  const filePath = path.join(__dirname, '..', 'dist', 'index.html');
  console.log('Sending index.html from:', filePath);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('index.html not found');
  }
});

// Error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
