import connection from '@repository/connection';
import express from 'express';
import 'reflect-metadata';
import routes from './routes/routes';

connection
  .create()
  .then(() => console.log('Server online'))
  .catch((err) => console.log('Error while creating connection', err));

const app = express();
app.use(express.json());
app.use(routes);

export = app;
