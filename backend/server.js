const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/api/districts', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('data.json'));
    res.json(Object.keys(data));
  } catch (err) {
    console.error('Error reading data.json:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});


app.get('/api/district/:name', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('data.json'));
    const district = req.params.name;
    if (!data[district]) {
      return res.status(404).json({ message: 'District not found' });
    }
    res.json(data[district]);
  } catch (err) {
    console.error('Error reading data.json:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
