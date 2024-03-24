import axios from 'axios';
import { User } from 'types/api/getFromOwnDB';
import { JSONPLACEHOLDER_RESOURCES } from './const';

export const getFromJsonPlaceholder = async (
  resource: JSONPLACEHOLDER_RESOURCES,
) => await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

export const getUsers = async (arg?: any) =>
  await axios.get(`http://localhost:5000/api/users`);

export const registerUser = async (userData: User) =>
  await axios.post(`http://localhost:5000/api/users/auth/signup`, userData);
