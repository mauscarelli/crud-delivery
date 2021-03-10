const knex = require('@repository/connection');
import { Request, Response } from 'express';

/**
 * Return a list of users from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @return {Response} - Returns an Http response with a list of all users from the database
 */
export async function index(request: Request, response: Response) {
  const results = await knex('usuario');
  return response.status(200).json(results);
}

/**
 * Return a list of users from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an Http response with the user with the received id from the database
 */
export async function findById(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { id } = request.params;
    const user = await knex('usuario').where({ id });
    const address = await knex('endereco').where({ user_id: id });
    if (user[0])
      return response.status(200).json({ ...user[0], endereco: address });
    else return response.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

/**
 * Create User in the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an HTTP status indicating that the user was created in the database
 */
export async function create(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    await knex('usuario').insert(request.body);
    return response.status(201).send();
  } catch (error) {
    next(error);
  }
}

/**
 * Update User from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an HTTP status indicating that the user was updated in the database
 */
export async function update(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { password, telefone, cpf, nomeCompleto } = request.body;
    const { id } = request.params;
    await knex('usuario')
      .update({
        password,
        telefone,
        cpf,
        nomeCompleto,
        updated_at: knex.fn.now(),
      })
      .where({ id });
    return response.status(200).send();
  } catch (error) {
    next(error);
  }
}

/**
 * Delete User from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an HTTP status indicating that the user was deleted from the database
 */
export async function exclude(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { id } = request.params;

    await knex('usuario').where({ id }).del();

    return response.status(204).send();
  } catch (error) {
    next(error);
  }
}
