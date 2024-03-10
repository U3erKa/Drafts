import express from 'express';
import rootRouter from './routes/index.js';
import { handleErrors } from './errorHandlers/index.js';

const app = express();
app.use('/api', rootRouter);

app.use(express.static('public'));
app.use(express.json());
app.use(handleErrors);

export default app;
