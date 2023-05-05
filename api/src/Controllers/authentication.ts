import { isEmpty, regexVery } from '@helpers/validate';
import { controllerHeader } from '@/Helpers/responseServer';
import { signinStore, returnResponse } from '@store/authentication';
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
        property: user,
        regex: /^[a-zA-Z0-9._%+-]+@gmail.com$/,
        message: 'Debe ser un Correo de Gmail',
      },
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
