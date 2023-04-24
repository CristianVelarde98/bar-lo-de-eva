import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ModelAuthSchema } from '@/Models/authentication';

type Authentication = {
  gmail: string;
  password: string;
};

export type returnResponse = {
  status?: number;
  token?: string;
  messageSuccess?: string;
};

dotenv.config();
// ~ ENV
const secrect = process.env.SECRET_KEY;

// * ENCARGADA DE LOGEAR
export async function signinStore({ gmail, password }: Authentication) {
  try {
    if (secrect === undefined)
      throw new Error('500-Error con la bases de datos');

    const exists = await ModelAuthSchema.findOne({ gmail });
    if (!exists) throw new Error('400-Usuario no existe');

    const passwordCorrect: boolean = await exists.validatePassword(password);
    if (!passwordCorrect) throw new Error('400-Contrasena incorrecta');

    const token = jwt.sign({ id: exists.id }, secrect, {
      expiresIn: 60 * 60 * 6,
    });

    const response: returnResponse = {
      status: 200,
      token,
      messageSuccess: 'Logeado correctamente',
    };
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
