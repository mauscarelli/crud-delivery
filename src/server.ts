import app from './app';
import { getRepository } from 'typeorm';
import { Pessoa } from '@repository/entity/Pessoa';

app.listen(3333);

const repository = getRepository(Pessoa);
repository
  .save({
    username: 'scarelli',
    password: '123456',
    primeiroNome: 'Mauricio',
    ultimoNome: 'Arantes',
    cpf: '43508808874',
    telefone: '14998888644',
    endereco: [
      {
        rua: 'Avenida Jose Henrique Ferraz',
        numero: 471,
        cidade: 'Bauru',
        cep: '17054115',
        UF: 'SP',
        complemento: '',
      },
    ],
  })
  .then(() => 'Pessoa criada')
  .catch(() => 'Não foi possivel criar pessoa');
