import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ModelAuthSchema, IAuth } from '@/Models/authentication';
import type { SingInUser, SingUpUser } from '@/Controllers/authentication';
import type { sendWithHeader, send } from '@/Helpers/responseServer';

dotenv.config();
// ~ ENV
const secrect = process.env.SECRET_KEY;

// * ENCARGADA DE LOGEAR
export async function signinStore({
  nickname,
  password,
}: SingInUser): Promise<sendWithHeader> {
  try {
    if (secrect === undefined)
      throw new Error('500-Error con la bases de datos');

    const exists = await ModelAuthSchema.findOne({ nickname });
    if (!exists) throw new Error('400-Usuario no existe');

    const passwordCorrect: boolean = await exists.validatePassword(password);
    if (!passwordCorrect) throw new Error('400-Contrasena incorrecta');

    const token = jwt.sign({ id: exists.id }, secrect, {
      expiresIn: 60 * 60 * 6,
    });

    const response: sendWithHeader = {
      status: 200,
      token,
      messageSuccess: 'Logeado correctamente',
    };
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('500-Error desconocido');
  }
}

// * ENCARGADA DE REGISTRAR
export async function singUpStore({
  nickname,
  password,
  confirmPassword,
}: SingUpUser): Promise<send> {
  if (secrect === undefined) throw new Error('500-Error con la bases de datos');

  const isExists = await ModelAuthSchema.findOne({ nickname });
  if (isExists?.nickname === nickname)
    throw new Error(`400-El usuario ${nickname} ya existe`);

  const newUser: IAuth = new ModelAuthSchema({
    nickname,
    password,
    confirmPassword,
  });

  newUser.password = await newUser.encryptPassword(newUser.password);
  await newUser.save();
  const response: send = {
    statusOk: 200,
    message: `Usuario ${nickname} ha sido creado sastifactoriamente.`,
  };
  return response;
}
