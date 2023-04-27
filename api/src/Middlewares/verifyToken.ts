import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const { SECRET_KEY, HEADER_TOKEN } = process.env;

interface ITokenUser {
  id: string;
  iat: number;
  exp: number;
}

export function tokenValidation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    if (SECRET_KEY === undefined)
      throw new Error('500-Error con la bases de datos');

    if (HEADER_TOKEN === undefined)
      throw new Error('500-Error con la bases de datos');

    const tokenCurrent = request.header(HEADER_TOKEN);
    if (!tokenCurrent) throw new Error('400-Acceso denegado');

    const payload = jwt.verify(tokenCurrent, SECRET_KEY) as ITokenUser;

    request.userId = payload.id;
    next();
  } catch (error: unknown) {
    const customError =
      error instanceof Error ? error.message.split('-') : null;
    const statusCode = customError ? Number(customError[0]) : 500;
    const errorMessage = customError ? customError[1] : 'error fatal server';

    response.status(statusCode).send(errorMessage);
  }
}
