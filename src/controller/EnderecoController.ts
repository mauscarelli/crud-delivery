const knex = require('@repository/connection');
import { Request, Response } from 'express';

/**
 * Return a list of Addresses from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @return {Response} - Returns an Http response with a list of all Addresses from the database
 */
export async function index(request: Request, response: Response) {
  const results = await knex('endereco');
  return response.status(200).json(results);
}

/**
 * Return a list of Addresses from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an Http response with the Address with the received id from the database
 */
export async function findById(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { id } = request.params;
    const results = await knex('endereco').where({ id });
    return response.status(200).json(results);
  } catch (error) {
    next(error);
  }
}

/**
 * Return a list of Addresses from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an Http response with the Addresses with the same Address from the database
 */
export async function findByUserId(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { id } = request.params;
    const results = await knex('endereco').where({ user_id: id });
    return response.status(200).json(results);
  } catch (error) {
    next(error);
  }
}

/**
 * Create Address in the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an HTTP status indicating that the Address was created in the database
 */
export async function create(
  request: Request,
  response: Response,
  next: Function
) {
  console.log(request.body);
  try {
    await knex('endereco').insert(request.body);
    return response.status(201).send();
  } catch (error) {
    next(error);
  }
}

/**
 * Update Address from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an HTTP status indicating that the Address was updated in the database
 */
export async function update(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { rua, numero, cidade, cep, UF, complemento } = request.body;
    const { id } = request.params;
    await knex('endereco')
      .update({
        rua,
        numero,
        cidade,
        cep,
        UF,
        complemento,
        updated_at: knex.fn.now(),
      })
      .where({ id });
    return response.status(200).send();
  } catch (error) {
    next(error);
  }
}

/**
 * Delete Address from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an HTTP status indicating that the Address was deleted from the database
 */
export async function exclude(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { id } = request.params;

    await knex('endereco').where({ id }).del();

    return response.status(204).send();
  } catch (error) {
    next(error);
  }
}
