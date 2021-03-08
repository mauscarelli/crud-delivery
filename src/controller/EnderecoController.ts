import { Endereco } from '@repository/entity/Endereco';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

const SQL_CONS = 'SQLITE_CONSTRAINT';

export const getEndereco = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const results = await getRepository(Endereco).find({
    relations: ['usuario'],
  });
  return response.status(200).json(results);
};
