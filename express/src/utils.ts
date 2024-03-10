import _ from 'lodash';
import generationConfig from './configs/generation.json' assert { type: 'json' };
import type { User } from './types.js';

const {
  users: { maxHeight, maxWeigth, minHeight, minWeigth },
  products: {
    categories,
    manufacturers,
    maxPrice,
    maxQuantity,
    minPrice,
    minQuantity,
    amountProducts,
  },
} = generationConfig;

function createUserQueryValues(user: User) {
  const {
    name: { first, last },
    email,
    login: { sha256: password },
    phone,
    dob: { date: birthday },
    gender,
  } = user;
  return `(
    '${first}',
    '${last}',
    '${email}',
    '${password}',
    '${phone}',
    '${birthday}',
    '${gender === 'male'}',
    '${_.random(minHeight, maxHeight, true)}',
    '${_.random(minWeigth, maxWeigth, false)}'
  )`;
}

function createProductQueryValues(value: unknown, index: number) {
  return `(
    'Product ${index}',
    ${_.random(minPrice, maxPrice, true)},
    ${_.random(minQuantity, maxQuantity, false)},
    '${categories[_.random(0, categories.length - 1, false)]}',
    '${manufacturers[_.random(0, manufacturers.length - 1, false)]}'
  )`;
}

export const mapUsers = (users: User[]) => {
  const usersElems = users.map(createUserQueryValues);
  return usersElems.join(',');
};

export const mapProducts = (amountOfProducts = amountProducts) => {
  const usersElems = new Array(amountOfProducts)
    .fill(undefined)
    .map(createProductQueryValues)
    .join(',');
  return usersElems;
};
