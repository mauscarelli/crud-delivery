import knex from '@repository/connection';
import { Request, Response } from 'express';

/**
 * Return a list of Orders from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @return {Response} - Returns an Http response with a list of all Orders from the database
 */
export async function index(request: Request, response: Response) {
  const results = await knex('pedido');
  return response.status(200).json(results);
}

/**
 * Return a list of Orders from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an Http response with the Order with the received id from the database
 */
export async function findById(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { id } = request.params;
    const results = await knex('pedido').where({ id });
    return response.status(200).json(results);
  } catch (error) {
    next(error);
  }
}

/**
 * Return a list of Orders from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an Http response with the Orders with the same User from the database
 */
export async function findByUserId(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { id } = request.params;
    const results = await knex('pedido').where({ user_id: id });
    return response.status(200).json(results);
  } catch (error) {
    next(error);
  }
}

/**
 * Create Order in the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an HTTP status indicating that the Order was created in the database
 */
export async function create(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    await knex('pedido').insert(request.body);
    return response.status(201).send();
  } catch (error) {
    next(error);
  }
}

/**
 * Update Order from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an HTTP status indicating that the Order was updated in the database
 */
export async function update(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { detalhePedido, descricao, total } = request.body;
    const { id } = request.params;
    await knex('pedido')
      .update({
        detalhePedido,
        descricao,
        total,
        updated_at: knex.fn.now(),
      })
      .where({ id });
    return response.status(200).send();
  } catch (error) {
    next(error);
  }
}

/**
 * Delete Order from the database
 * @param {Request} request - Http request information
 * @param {Response} response - Response function
 * @param {Function} next - ErrorHandling Callback
 * @return {Response} - Returns an HTTP status indicating that the Order was deleted from the database
 */
export async function exclude(
  request: Request,
  response: Response,
  next: Function
) {
  try {
    const { id } = request.params;

    await knex('pedido').where({ id }).del();

    return response.status(204).send();
  } catch (error) {
    next(error);
  }
}
