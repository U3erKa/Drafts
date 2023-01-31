import express from 'express';
import cors from 'cors';
import rootRouter from './router';

import type { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  res.status(err.status || 500).send({ error: err });
};

const app = express();

app.use(cors());
app.use(express.json());

app.use(rootRouter);
app.use(errorHandler);

export default app;
