import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
const secrect = SECRET_KEY || '';

export type tokenInfo = {
  id: string;
  startedTime: string;
  iat: number;
  exp: number;
};

export const validarCookie = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const cookie = request.cookies.auth;
    const data = verify(cookie, secrect) as tokenInfo;
    request.tokenInfo = data;
    next();
  } catch (error) {
    return response.status(401).json({ message: 'sin autorizacion' });
  }
};
