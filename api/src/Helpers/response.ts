import type { Response } from 'express';
import type { controllerHttp } from '@/types/helper/response';

export const responseHttp = async (
  response: Response,
  callBack: () => Promise<controllerHttp>
) => {
  try {
    const { status, message, token }: controllerHttp = await callBack();
    response.status(Number(status) | 200).json(message);
    /*
    if (token === undefined)
    else
      response
        .status(Number(status) | 200)
        .setHeader('Set-Cookie', token)
        .json(message);
    */
  } catch (error: unknown) {
    if (error instanceof Error)
      response.status(400).json({
        error: error.message,
      });
    else
      response.status(500).json({
        message: 'error inesperado',
        error: error,
      });
  }
};
