import { Endereco } from '@repository/entity/Endereco';
import { Pessoa } from '@repository/entity/Pessoa';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

const SQL_CONS = 'SQLITE_CONSTRAINT';

export const getPessoas = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const pessoas = await getRepository(Pessoa).find({
    relations: ['usuario.endereco'],
  });
  return response.status(200).json(pessoas);
};

export const getPessoa = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const pessoa = await getRepository(Pessoa).findOne(request.params.id);
  return response.status(200).json(pessoa);
};

export const createPessoa = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const pessoa = getRepository(Pessoa).create(request.body);
  try {
    const results = await getRepository(Pessoa).save(pessoa);
    return response.status(200).json(results);
  } catch (err) {
    if (err && err.code === SQL_CONS) {
      console.log(err);
      return response.status(400).json({ error: 'Nome de usuário já existe' });
    } else return response.status(500);
  }
};
