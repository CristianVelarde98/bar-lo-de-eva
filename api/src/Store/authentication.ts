import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ModelAuthSchema,IAuth } from '@/Models/authentication';
import { controllerHeader, controller } from '@/Helpers/responseServer';
import { serialize } from 'cookie';
import bcrypt from 'bcryptjs';

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

export async function signupStore(user: string, password: string): Promise<controller>{
  try {
    if (secrect === undefined)
    throw new Error('500-Error con la bases de datos');

    const exists = await ModelAuthSchema.findOne({ user });
    if (exists?.user === user) throw new Error('400-Usuario ya existe');
    
    const salt = await bcrypt.genSalt(10);
    const encrypt = await bcrypt.hash(password, salt);
    
    const newUser: IAuth = new ModelAuthSchema({ user, password: encrypt })
    await newUser.save();

    return {
      statusOk: 200,
      message: "usuario creado correctamente"
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}