import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('Connections created'))
  .catch(() => console.log('Error while creating connections'));
