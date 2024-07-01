import axios from 'axios';
import { User } from 'types/api/getFromOwnDB';
import { JSONPLACEHOLDER_RESOURCES } from './const';

export const getFromJsonPlaceholder = async (resource: JSONPLACEHOLDER_RESOURCES) =>
  await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
