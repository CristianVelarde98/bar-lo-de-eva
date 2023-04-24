interface returnController {
  statusOK?: number;
  message?: string;
}

/**
 * Función para iniciar sesión de usuario.
 * @param {string} gmail - El nombre del usuario.
 * @param {string} password - La contraseña del usuario.
 * @throws {Error} - si algo llega a fallar el tomara el error separara usando el "-" y devolvera el error con mensaje y status de la peticion
 * @returns {returnController} - Objeto que contiene el código de estado HTTP y un mensaje.
 */
export function Singin(gmail: string, password: string): returnController {
  try {
    if (gmail.length === 0) throw new Error('400-usuario esta vacio');
    if (password.length === 0) throw new Error('400-contrasena esta vacia');

    

    return {};
  } catch (error: any) {
    throw new Error(error.message);
  }
}
