// Originally from https://github.com/academind/aws-demos.git

const fs = require('node:fs/promises');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());



app.get('/', async function (req, res) {
  let dummyData;
  // for (let i = 0; i < 5000; i++) {
    dummyData = await fs.readFile('data.json');
  // }
  const json = JSON.parse(dummyData);
  res.json({ message: 'Success!', data: json });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/data/:amount', async function (req, res) {
  const amount = req.params.amount;
  console.log({ amount })

  const numAmount = parseInt(amount, 10);
  for (let i = 0; i < numAmount; i++) {
    dummyData = await fs.readFile('data.json');
  }

  const json = JSON.parse(dummyData);
  res.json({ message: 'Success!', data: json });
});

app.post('/data', async function (req, res) {
  const data = req.body;

  res.status(201).json({ message: 'Received dummy data.', data });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
});
