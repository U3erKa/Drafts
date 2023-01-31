import axios from 'axios';
import { HTTP_SERVER_URL } from '../constants';

const httpClient = axios.create({
  baseURL: HTTP_SERVER_URL,
});

export const login = (userData) => httpClient.post('/auth/login', userData);
export const register = (userData) => httpClient.post('/auth/register', userData);
export const refresh = (token) => httpClient.post('/auth/refresh', { token });
