import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const AUTH_TOKEN = process.env.AUTH_TOKEN;

// ################ Houre ###### Minutes ### seconds ###################
const totalSeconds = (24 * 3600) + (55 * 60) + 42;
const endTime = new Date(Date.now() + totalSeconds * 1000).toISOString();

fetch('http://localhost:3000/endtime', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AUTH_TOKEN}`
  },
  body: JSON.stringify({ endTime })
})
  .then(res => res.json())
  .then(data => console.log('✅ End time updated:', data))
  .catch(err => console.error('❌ Error:', err));
