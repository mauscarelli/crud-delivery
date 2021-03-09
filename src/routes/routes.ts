import * as PessoaController from '@controller/PessoaController';
import * as EnderecoController from '@controller/EnderecoController';
import * as PedidoController from '@controller/PedidoController';
import { Router } from 'express';

// eslint-disable-next-line new-cap
const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json('Server online');
});

// Routes pessoa
routes.get('/pessoa', PessoaController.index);
routes.get('/pessoa/:id', PessoaController.findById);
routes.post('/pessoa', PessoaController.create);
routes.put('/pessoa/:id', PessoaController.update);
routes.delete('/pessoa/:id', PessoaController.exclude);

// Routes Endereco
routes.get('/endereco', EnderecoController.index);
routes.get('/endereco/:id', EnderecoController.findById);
routes.get('/endereco/pessoa/:id', EnderecoController.findByUserId);
routes.post('/endereco', EnderecoController.create);
routes.put('/endereco/:id', EnderecoController.update);
routes.delete('/endereco/:id', EnderecoController.exclude);

// Routes Pedido
routes.get('/pedido', PedidoController.index);
routes.get('/pedido/:id', PedidoController.findById);
routes.get('/pedido/pessoa/:id', PedidoController.findByUserId);
routes.post('/pedido', PedidoController.create);
routes.put('/pedido/:id', PedidoController.update);
routes.delete('/pedido/:id', PedidoController.exclude);

export = routes;
