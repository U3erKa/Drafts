import Message from '../db/models/message';
import type { RequestHandler } from 'express';

export const createMessage: RequestHandler = async (req, res, next) => {
  const {
    body,
    // @ts-ignore
    tokenData: { id: userId },
  } = req;

  try {
    const message = await Message.create({ ...body, author: userId });

    res.status(201).send({ data: message });
  } catch (error) {
    next(error);
  }
};

export const getMessages: RequestHandler = async (req, res, next) => {
  try {
    const messages = await Message.find()
      .populate({
        path: 'author',
        select: ['-__v', '-password'],
      })
      .select(['-__v']);

    res.send({ data: messages });
  } catch (error) {
    next(error);
  }
};
