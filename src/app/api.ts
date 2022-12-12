import { JSONPLACEHOLDER_RESOURCES } from './constants';

export async function getUsers(resource: JSONPLACEHOLDER_RESOURCES) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
  const data = await res.json();
  return data;
}
