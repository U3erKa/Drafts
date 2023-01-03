import pg from 'pg';
import { getUsers } from './api.js';
import { mapUsers } from './utils.js';
const { Client } = pg;

const config: pg.ClientConfig = {
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'shop',
};

const client = new Client(config);

const users = await getUsers();

await client.connect();

const { rows } = await client.query(`
INSERT INTO users
(name, email, password, phone_num)
VALUES
${mapUsers(users)}
RETURNING *;
`);
console.log(rows);

await client.end();

console.log(true);
