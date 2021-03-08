import { getEndereco } from '@controller/EnderecoController';
import {
  createPessoa,
  getPessoa,
  getPessoas,
} from '@controller/PessoaController';
import { Router } from 'express';

// eslint-disable-next-line new-cap
const routes = Router();

routes.get('/', (req, res) => {
  res.send('GET request to homepage');
});

routes.get('/endereco', getEndereco);

routes.get('/pessoa', getPessoas);
routes.get('/pessoa/:id', getPessoa);
routes.post('/pessoa', createPessoa);

export = routes;
