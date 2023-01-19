const express = require('express');
const { handleError } = require('./errorHandlers');
const { sequelizeErrorHandler } = require('./errorHandlers/sequelizeErrors');
const router = require('./router');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(router);
app.use(sequelizeErrorHandler, handleError);

module.exports = app;
