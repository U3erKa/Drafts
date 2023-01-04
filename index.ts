import fs from 'fs/promises';
import pg from 'pg';
import _ from 'lodash';
import config from './configs/DB.json' assert { type: 'json' };
import generationConfig from './configs/generation.json' assert { type: 'json' };
import { getUsers } from './api.js';
import User from './model/User.js';
import Product from './model/Product.js';

const { Client } = pg;
const {
  orders: { maxOrders, minOrders, maxQuantity, minQuantity },
} = generationConfig;

const client = new Client(config);

User._client = client;

const users = await getUsers();

await client.connect();

const resetDB = await fs.readFile('./sql/shop/tables.sql', 'utf-8');
await client.query(resetDB);

const createdUsers = await User.bulkCreate(users);
const products = await Product.bulkCreate();

// создаем заказы
const ordersString = createdUsers
  .map((user) =>
    new Array(_.random(minOrders, maxOrders, false))
      .fill(undefined)
      .map(() => `(${user.id})`)
      .join(',')
  )
  .join(',');

const { rows: orders } = await client.query(`
INSERT INTO orders (
  user_id
)
VALUES ${ordersString}
RETURNING id;
`);

// наполнить заказы
const ordersToProductsString = orders
  .map((order) => {
    // отбор продуктов
    const productsInOrder = new Array(_.random(1, 5))
      .fill(undefined)
      .map(() => products[_.random(0, products.length - 1)]);

    // отсортировать повторяющиеся продукты
    const filteredProducts = [...new Set(productsInOrder)];
    // вернуть строку типа (1, 4 , 18)
    return filteredProducts
      .map((product) => `(${order.id}, ${product.id}, ${_.random(minQuantity, maxQuantity)})`)
      .join(',');
  })
  .join(',');

await client.query(`
INSERT INTO orders_to_products (
  order_id,
  product_id,
  quantity
)
VALUES ${ordersToProductsString};
`);

await client.end();

console.log(true);
