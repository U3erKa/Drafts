import { NextFunction, Request, Response } from "express";
import { ValidationError } from "yup";

export const handleErrors = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: err.message });
};

export const handleValidationError = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
    return res.status(400).send(err.message);
  }
  next(err);
};
