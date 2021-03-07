import express from 'express';
import 'reflect-metadata';
import routes from './routes/routes';

const app = express();
app.use(express.json());
app.use(routes);

export = app;
