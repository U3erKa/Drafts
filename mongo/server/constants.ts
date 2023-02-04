export const PORT = process.env.PORT ?? 5000;
export const BASE_URL = process.env.BASE_URL ?? 'localhost';

export const DB_STRING =
  process.env.DB_STRING ?? 'mongodb://localhost:27017/test';
export const SALT_OR_ROUNDS: string | number = process.env.SALT ?? 10;
export const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET ?? 'tokensecret';
export const ACCESS_TOKEN_TIME = process.env.ACCESS_TOKEN_TIME ?? '1d';

export const SOCKET_EVENTS = {
  NEW_MESSAGE: 'newMessage',
  NEW_MESSAGE_ERROR: 'newMessageError',
};
