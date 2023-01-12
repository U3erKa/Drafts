import type { NextFunction, Request, Response } from 'express';

const express = require('express');

const app = express();

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello users');
};

const validateRequest = async (req: Request, res: Response, next: NextFunction) => {
  if (true) {
    return next();
  }
  next(req);
};

const createuser = async (req: Request, res: Response, next: NextFunction) => {
  res.send(req.body);
};

const errorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.send('Error');
};

app.use(express.json());

app.route('/users').get(getUsers).post(validateRequest, createuser);

app.use(errorHandler);

module.exports = app;
