import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ModelAuthSchema, IAuth } from '@models/authentication';
import { controllerHeader, controller } from '@helpers/responseServer';
import { serialize } from 'cookie';
import bcrypt from 'bcryptjs';
import { UserInterface } from '@/Models/user';

type Authentication = {
  user: string;
  password: string;
};

export type returnResponse = {
  status?: number;
  token: string;
  messageSuccess?: string;
};

export interface User {
  id:string;
  startedTime:string;
  iat:number;
  exp:number;
}

dotenv.config();
// ~ ENV
const secrect = process.env.SECRET_KEY;

// * ENCARGADA DE LOGEAR
export async function signinStore({
  user,
  password,
}: Authentication): Promise<controllerHeader> {
  try {
    if (secrect === undefined)
      throw new Error('500-Error con la bases de datos');

    const exists = await ModelAuthSchema.findOne({ user });
    if (!exists) throw new Error('400-Usuario no existe');

    const passwordCorrect: boolean = await exists.validatePassword(password);
    if (!passwordCorrect) throw new Error('400-Contrasena incorrecta');

    const startedTime = new Date();
    const tokenJwt = jwt.sign({ id: exists._id, startedTime }, secrect, {
      expiresIn: '1w',
    });
    const token = serialize('auth', tokenJwt);
    const response: controllerHeader = {
      statusOk: 200,
      token,
      user: {
        name: exists.user
      },
      authenticate: true,
    };
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function signupStore(
  user: string,
  password: string
): Promise<controller> {
  try {
    if (secrect === undefined)
      throw new Error('500-Error con la bases de datos');

    const exists = await ModelAuthSchema.findOne({ user });
    if (exists?.user === user) throw new Error('400-Usuario ya existe');

    const salt = await bcrypt.genSalt(10);
    const encrypt = await bcrypt.hash(password, salt);

    const newUser: IAuth = new ModelAuthSchema({ user, password: encrypt });
    await newUser.save();

    return {
      statusOk: 200,
      message: 'usuario creado correctamente',
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function verifyJWTToken({token}:{token:string}) {
  if (!secrect) throw new Error('introduce your secret for JWT in .env')
  if (!token) throw new Error('Taken must be a secret and exists')
  try {
    const decodedUri = decodeURIComponent(token).split('=')[1];
    const decoded = jwt.verify(decodedUri,secrect) as User;
    const userIsValid = await ModelAuthSchema.findOne<IAuth>({_id:decoded.id})
    if(!userIsValid) throw new Error('User not found');
    return {
      userName: userIsValid.user
    }
  }
  catch (error:any) {
    throw new Error(error.message);
  }
}