import axios from 'axios';
import { JSONPLACEHOLDER_RESOURCES } from './constants';

export const getUsers = async (resource: JSONPLACEHOLDER_RESOURCES) =>
  await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
