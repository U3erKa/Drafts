import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import { ValidationError } from 'yup';

export const handleErrors = async (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status ?? 500).send(err.message ?? 'Server error');
};

export const handleValidationError = async (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
    return res.status(err.status ?? 500).send(err.message ?? 'Server error');
  }
  next(err);
};
