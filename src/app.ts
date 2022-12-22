import express from 'express';
import rootRouter from './routes/index.js';
// import pagesRouter from './routes/index.js';

const app = express();
app.use('/api', rootRouter);

export default app;
