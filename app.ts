import type { NextFunction, Request, Response } from 'express';

const express = require('express');

const app = express();

app.use(express.json());

module.exports = app;
