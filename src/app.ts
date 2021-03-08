import express from 'express';
import 'reflect-metadata';
import '@repository/connection';
import routes from './routes/routes';

const app = express();
app.use(express.json());
app.use(routes);

export = app;
