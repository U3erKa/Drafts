import pg from 'pg';
import { Sequelize } from 'sequelize';
import { config as dotenv } from 'dotenv';
dotenv();
import _Car from './car.js';
import _Review from './review.js';
import _Seller from './seller.js';

export interface DB {
  Car: ReturnType<typeof _Car>;
  Review: ReturnType<typeof _Review>;
  Seller: ReturnType<typeof _Seller>;
}

export interface ICar extends InstanceType<DB['Car']> {}
export interface IReview extends InstanceType<DB['Review']> {}
export interface ISeller extends InstanceType<DB['Seller']> {}

const db = {} as DB;
export const sequelize = new Sequelize(process.env.POSTGRES_DB_STRING!, {
  dialectModule: pg,
});

for (const createModel of [_Car, _Review, _Seller]) {
  // @ts-expect-error
  const model = createModel(sequelize);
  db[model.name as keyof DB] = model;
}

for (const key in db) {
  if (Object.hasOwn(db, key)) {
    const model = db[key as keyof typeof db];
    if (model.associate) model.associate(db);
  }
}

console.log('db is =>>>>>>>>>>');
console.log(Object.keys(db));

export const { Car, Review, Seller } = db;
