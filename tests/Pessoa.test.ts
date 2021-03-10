const request = require('supertest');
import knex from '@repository/connection';
import app from './../src/app';

describe('Test Pessoa', () => {
  afterAll(async (done) => {
    await knex.destroy();
    done();
  });

  it('should get main route', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('message');
  });

  it('should create an user', async () => {
    const response = await request(app).post('/pessoa').send({
      username: 'scarelli',
      password: '123456',
      telefone: '14998888644',
      cpf: '43508808875',
      nomeCompleto: 'Mauricio Scarelli Arantes',
    });

    expect(response.statusCode).toEqual(201);
  });

  it('should return a list of users', async () => {
    const response = await request(app).get('/pessoa');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ username: 'scarelli' }),
      ])
    );
  });

  it('should update an user password', async () => {
    const response = await request(app).put('/pessoa/1').send({
      password: 'abcdefg',
    });

    expect(response.statusCode).toEqual(200);
  });

  it('should return the updateded user with index 1', async () => {
    const response = await request(app).get('/pessoa/1');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
        password: 'abcdefg',
      })
    );
  });

  it('should delete an user with index 1', async () => {
    const response = await request(app).delete('/pessoa/1');

    expect(response.statusCode).toEqual(204);
  });
});
