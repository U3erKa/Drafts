import axios from 'axios';
import { JSONPLACEHOLDER_RESOURCES } from './constants';

export async function getUsers(resource: JSONPLACEHOLDER_RESOURCES) {
  const { data: users } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  return users;
}
