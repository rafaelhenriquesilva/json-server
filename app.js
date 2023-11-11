const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(cors())

const data = require('./db.json');

app.get('/medicamentos', (req, res) => {
  res.json(data.medicamentos);
});

app.get('/suplementos', (req, res) => {
  res.json(data.suplementos);
});

app.get('/curativos', (req, res) => {
  res.json(data.curativos);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
