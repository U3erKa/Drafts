import axios from 'axios';

import { ACCESS_TOKEN, HTTP_SERVER_URL, REFRESH_TOKEN } from '../constants';
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const httpClient = axios.create({
  baseURL: HTTP_SERVER_URL,
});

const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);
httpClient.interceptors.request.use(requestInterceptorConfig, requestInterceptorError);

export const login = (userData) => httpClient.post('/auth/login', userData);
export const register = (userData) => httpClient.post('/auth/register', userData);
export const refresh = (token) => httpClient.post('/auth/refresh', { token });

function responseInterceptor(response: AxiosResponse) {
  if (response?.data?.data?.tokens) {
    const { access, access: refresh } = response.data.data.tokens;
    // should be REAL refresh
    localStorage.setItem(REFRESH_TOKEN, refresh);
    sessionStorage.setItem(ACCESS_TOKEN, access);
  }
  return response;
}

async function errorInterceptor(error?: any) {
  const {
    response: { status },
  } = error;

  const refreshFromLS = localStorage.getItem(REFRESH_TOKEN);

  if (status === 419 && refreshFromLS) {
    const {
      data: {
        data: {
          tokens: { access, access: refresh },
        },
      },
    } = await axios.post(`${HTTP_SERVER_URL}/auth/refresh`, {
      token: refreshFromLS,
    });

    localStorage.setItem(REFRESH_TOKEN, refresh);
    sessionStorage.setItem(ACCESS_TOKEN, access);

    error.config.headers['Authorization'] = `Bearer ${accessToken}`;

    return httpClient.request(error.config);
  }

  return Promise.reject(error);
}

function requestInterceptorConfig(config: InternalAxiosRequestConfig) {
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
}

function requestInterceptorError(error?: any) {
  return Promise.reject(error);
}
