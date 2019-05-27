const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

/** Connection with DB  */
require('./db/connection');

const index = require('./router/index');
const booksStore = require('./router/booksStore');

const server = express();

server.use(methodOverride('X-HTTP-Method'));
server.use(methodOverride('X-HTTP-Method-Override'));
server.use(methodOverride('X-Method-Override'));
server.use(methodOverride('_method'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true,
}));

server.use((req, res, next) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {
      'Content-Type': 'image/x-icon',
    });
    res.end();
  } else {
    next();
  }
});

server.use('/', index);
server.use('/books', booksStore);

server.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

server.use((err, req, res) => {
  res.status(err.status || 500).json({
    err: err.message,
  });
});

module.exports = server;
