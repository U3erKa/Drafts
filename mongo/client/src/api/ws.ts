import { io } from 'socket.io-client';

import store from '../redux';
import { addMessage, addMessageError } from '../redux/message.slice';
import { WS_SERVER_URL, SOCKET_EVENTS } from '../constants';

const { NEW_MESSAGE, NEW_MESSAGE_ERROR } = SOCKET_EVENTS;

const socket = io(WS_SERVER_URL, { transports: ['websocket'] });
export const sendMessage = (message) => socket.emit(NEW_MESSAGE, message);

socket.on(NEW_MESSAGE, (message) => {
  store.dispatch(addMessage(message));
});

socket.on(NEW_MESSAGE_ERROR, (error) => {
  store.dispatch(addMessageError(error));
});
