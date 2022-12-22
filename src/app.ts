import express, { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';
import rootRouter from './routes/index.js';
// import pagesRouter from './routes/index.js';

const app = express();
app.use('/api', rootRouter);

const handleErrors = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: err.message });
};

const handleValidationError = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
    return res.status(400).send(err.message);
  }
  next(err);
};

app.use(handleValidationError, handleErrors);

export default app;
