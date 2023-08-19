import { isEmpty, regexVery } from '@helpers/validate';
import { controllerHeader, controller } from '@helpers/responseServer';
import { signinStore, signupStore } from '@store/authentication';
/**
 * Función para iniciar sesión de usuario.
 * @param {string} user - El nombre del usuario.
 * @param {string} password - La contraseña del usuario.
 * @throws {Error} - si algo llega a fallar el tomara el error separara usando el "-" y devolvera el error con mensaje y status de la peticion
 * @returns {returnController} - Objeto que contiene el código de estado HTTP y un mensaje.
 */
export async function Singin(
  user: string,
  password: string
): Promise<controllerHeader> {
  try {
    isEmpty({ user, password });

    regexVery([
      {
        property: password,
        regex: /^(?=.*[A-Z])(?=.*\d).{8,18}$/,
        message:
          'tenga al menos una letra mayúscula y un número,maximo 18 caracteres,minimo 8 caracteres',
      },
    ]);
    return await signinStore({ user, password });
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function Singup(user: string, password: string, confirmPassword: string): Promise<controller> {
  try {
    isEmpty({ user, password, confirmPassword })
    regexVery([
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

    if (confirmPassword !== password) throw new Error("401-contrasena no coinciden")

    return signupStore(user, password)
  } catch (error: any) {
    throw new Error(error.message);
  }
}
