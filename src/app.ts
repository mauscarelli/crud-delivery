import express from 'express';
import 'reflect-metadata';
import routes from './routes/routes';

const app = express();
app.use(express.json());
app.use(routes);

// notFound
app.use((request, response, next) => {
  const error = {
    message: 'Not Found',
    status: 404,
  };
  next(error);
});

// catch all
app.use((error, request, response, next) => {
  response.status(error.status || 500).json({ error: error.message });
});

export = app;
