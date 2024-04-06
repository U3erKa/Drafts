import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';

export const handleErrors = async (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status ?? 500).send(err.message ?? 'Server error');
};
