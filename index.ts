import fs from 'fs/promises';
import pg from 'pg';
import config from './configs/DB.json' assert { type: 'json' };
import { getUsers } from './api.js';
import User from './model/User.js';
const { Client } = pg;

const client = new Client(config);

User._client = client;

const users = await getUsers();

await client.connect();

const resetDB = await fs.readFile('./sql/shop/tables.sql', 'utf-8');
await client.query(resetDB);

const createdUsers = await User.bulkCreate(users);

await client.end();

console.log(true);
