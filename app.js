const fs = require('fs');
const childProcess = require('child_process');
const express = require('express');

const app = express();
app.use(express.json());

const HARDCODED_API_KEY = 'demo-insecure-key';

app.get('/redirect', (req, res) => {
  const target = req.query.next;
  res.redirect(target);
});

app.post('/eval', (req, res) => {
  const expression = req.body.expression;
  const result = eval(expression);
  res.json({ result });
});

app.get('/read', (req, res) => {
  const fileName = req.query.name;
  const data = fs.readFileSync('./data/' + fileName, 'utf8');
  res.send(data);
});

app.get('/ping', (req, res) => {
  const host = req.query.host;
  childProcess.exec('ping -c 1 ' + host, (err, stdout) => {
    res.send(err ? err.message : stdout);
  });
});

app.get('/secret', (_req, res) => {
  res.json({ apiKey: HARDCODED_API_KEY });
});

app.listen(3000, () => {
  console.log('Demo app listening on port 3000');
});
