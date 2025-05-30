const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT | 3000;

app.use(bodyParser.json());

let obj = null;

// POST endpoint for Music Assistant to push URL
app.post('/ma/push-url', (req, res) => {
  const { streamUrl } = req.body;

  if (!streamUrl) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  obj = { streamUrl };
  console.log('Received URL:', streamUrl);
  res.json({ status: 'ok' });
});

// GET endpoint for Alexa skill to fetch latest URL
app.get('/ma/latest-url', (req, res) => {
  if (!obj) {
    return res.status(404).json({ error: 'No URL available' });
  }

  res.json({
    streamUrl: obj.streamUrl,
  });
});

app.listen(PORT, () => {
  console.log(`MA-Alexa API running on port ${PORT}`);
});