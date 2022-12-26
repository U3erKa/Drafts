import { NextFunction, Request, Response, json } from 'express';
import { USER_SCHEMA } from '../utils/validationSchema.js';

export const bodyParser = json();

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await USER_SCHEMA.validate(req.body);
    next();
  } catch (error: any) {
    next(error);
  }
};
