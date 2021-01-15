const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production' || process.env.NODE_ENV !== 'staging';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get('/hello', (req, res) => {
    return res.json({ message: 'Hello World' });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`server is up on port: ${port}`);
  });
});
