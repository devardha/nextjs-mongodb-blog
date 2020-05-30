 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  // Server-side
  const route = pathMatch();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});