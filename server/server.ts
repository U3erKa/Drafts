import { config as dotenv } from 'dotenv';
dotenv();
import http from 'http';
import { Server } from 'socket.io';

import app from './app';
import Message from './db/models/message';
import { BASE_URL, PORT, SOCKET_EVENTS } from './constants';

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async (message) => {
    try {
      const newMessage = await (
        await Message.create(message)
      ).populate({
        path: 'author',
        select: ['-password'],
      });

      io.emit(SOCKET_EVENTS.NEW_MESSAGE, newMessage);
    } catch (error) {
      console.log(error);
      socket.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error);
    }
  });

  socket.on('disconnect', (reason) => {
    console.log('Disconnected, reason:');
    console.log(reason);
  });
});

server.listen(PORT, () => {
  console.log(`Server started at http://${BASE_URL}:${PORT}`);
});
