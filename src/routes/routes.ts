import { Router } from 'express';

// eslint-disable-next-line new-cap
const routes = Router();

routes.get('/', (req, res) => {
  res.send('GET request to homepage');
});

export = routes;
