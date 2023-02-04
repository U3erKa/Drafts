import express from 'express';
import cors from 'cors';

import rootRouter from './router';
import { basicErrorHandler, tokenErrorHandler } from './errors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(rootRouter);
app.use(tokenErrorHandler, basicErrorHandler);

export default app;
