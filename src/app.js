const express = require('express');

require('./database')

const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(routes)

app.use((err, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

module.exports = app;