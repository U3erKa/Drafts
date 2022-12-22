import express from 'express';
import rootRouter from './routes/index.js';
import { handleErrors, handleValidationError } from './errorHandlers/index.js';
// import pagesRouter from './routes/index.js';

const app = express();
app.use(handleValidationError, handleErrors);
app.use('/api', rootRouter);

export default app;
