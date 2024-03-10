import fs from 'fs/promises';
import pg from 'pg';
import _ from 'lodash';
import config from './configs/DB.json' assert { type: 'json' };
import generationConfig from './configs/generation.json' assert { type: 'json' };
import { getUsers } from './api.js';
import User from './model/custom/User.js';
import Product from './model/custom/Product.js';

const { Client } = pg;
const {
  orders: { maxOrders, minOrders, maxQuantity, minQuantity },
} = generationConfig;

const client = new Client(config);

User._client = client;
Product._client = client;

const users = await getUsers();

await client.connect();

const resetDB = await fs.readFile('./sql/shop/tables.sql', 'utf-8');
await client.query(resetDB);

const createdUsers = await User.bulkCreate(users);
const products = await Product.bulkCreate();

// створюємо замовлення
const ordersString = createdUsers
  .map((user) =>
    new Array(_.random(minOrders, maxOrders, false))
      .fill(undefined)
      .map(() => `(${user.id})`)
      .join(','),
  )
  .join(',');

const { rows: orders } = await client.query(`-- sql
INSERT INTO orders (
  user_id
)
VALUES ${ordersString}
RETURNING id;
`);

// наповнюємо замовлення
const ordersToProductsString = orders
  .map((order) => {
    // відбір продуктів
    const productsInOrder = new Array(_.random(1, 5))
      .fill(undefined)
      .map(() => products[_.random(0, products.length - 1)]);

    // відфільтрувати повторювані продукти
    const filteredProducts = [...new Set(productsInOrder)];
    // повернути строку строку типу (1, 4 , 18)
    return filteredProducts
      .map(
        (product) =>
          `(${order.id}, ${product.id}, ${_.random(minQuantity, maxQuantity)})`,
      )
      .join(',');
  })
  .join(',');

await client.query(`-- sql
INSERT INTO orders_to_products (
  order_id,
  product_id,
  quantity
)
VALUES ${ordersToProductsString};
`);

await client.end();

console.log(true);
