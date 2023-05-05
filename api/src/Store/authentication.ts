import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ModelAuthSchema } from '@/Models/authentication';
import { controllerHeader } from '@/Helpers/responseServer';
import { serialize } from 'cookie';

type Authentication = {
  user: string;
  password: string;
};

export type returnResponse = {
  status?: number;
  token: string;
  messageSuccess?: string;
};

dotenv.config();
// ~ ENV
const secrect = process.env.SECRET_KEY;

// * ENCARGADA DE LOGEAR
export async function signinStore({ user, password }: Authentication): Promise<controllerHeader> {
  try {
    if (secrect === undefined)
      throw new Error('500-Error con la bases de datos');

    const exists = await ModelAuthSchema.findOne({ user });
    if (!exists) throw new Error('400-Usuario no existe');

    const passwordCorrect: boolean = await exists.validatePassword(password);
    if (!passwordCorrect) throw new Error('400-Contrasena incorrecta');
    
    const startedTime = new Date();
    const tokenJwt = jwt.sign({ id: exists._id, startedTime }, secrect, {
      expiresIn: 60 * 60 * 6,
    });

    const token = serialize('auth', tokenJwt, {
      httpOnly: true,
    });

    const response: controllerHeader = {
      statusOk: 200,
      token,
      message: 'Logeado correctamente',
    };
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
