import { isEmpty, regexVery } from '@helpers/validate';
import { signinStore, singUpStore } from '@store/authentication';
import type { sendWithHeader, send } from '@/Helpers/responseServer';

export type SingInUser = {
  nickname: string;
  password: string;
};

export type SingUpUser = {
  nickname: string;
  password: string;
  confirmPassword: string;
};

/**
 * Función para iniciar sesión de usuario.
 * @param {string} nickname - El nombre del usuario.
 * @param {string} password - La contraseña del usuario.
 * @throws {Error} - si algo llega a fallar el tomara el error separara usando el "-" y devolvera el error con mensaje y status de la peticion
 * @returns {returnController} - Objeto que contiene el código de estado HTTP y un mensaje.
 */
export async function SingInController({
  nickname,
  password,
}: SingInUser): Promise<sendWithHeader> {
  try {
    isEmpty({ nickname, password });

    regexVery([
      {
        property: nickname,
        regex: /^[a-zA-Z0-9]{8,24}$/,
        message: 'no contenga simbolos,que sea minimo 8 caracteres y maximo 24',
      },
      {
        property: password,
        regex: /^(?=.*[A-Z])(?=.*\d).{8,18}$/,
        message:
          'tenga al menos una letra mayúscula y un número,maximo 18 caracteres,minimo 8 caracteres',
      },
    ]);

    return signinStore({ nickname, password });
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('500-Error desconocido');
  }
}

export async function SingUpController({
  nickname,
  password,
  confirmPassword,
}: SingUpUser): Promise<send> {
  try {
    isEmpty({ nickname, password, confirmPassword });

    regexVery([
      {
        property: nickname,
        regex: /^[a-zA-Z0-9]{8,24}$/,
        message: 'no contenga simbolos,que sea minimo 8 caracteres y maximo 24',
      },
      {
        property: password,
        regex: /^(?=.*[A-Z])(?=.*\d).{8,18}$/,
        message:
          'tenga al menos una letra mayúscula y un número,maximo 18 caracteres,minimo 8 caracteres',
      },
      {
        property: confirmPassword,
        regex: /^(?=.*[A-Z])(?=.*\d).{8,18}$/,
        message:
          'tenga al menos una letra mayúscula y un número,maximo 18 caracteres,minimo 8 caracteres',
      },
    ]);

    if (password !== confirmPassword)
      throw new Error('400-Contrasenas no coinciden');

    return singUpStore({ nickname, password, confirmPassword });
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('500-Error desconocido');
  }
}
