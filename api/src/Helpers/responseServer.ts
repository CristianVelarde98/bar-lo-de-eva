import { Response } from 'express';

export type send = {
  statusOk?: number;
  message?: string;
};

export type sendWithHeader = {
  status?: number;
  token: string;
  messageSuccess?: string;
};

/**
 * Función que se encarga de dar respuesta concreta al frontend
 * @param {Response} response - response del network
 * @param {Function} controller - controlador de la peticion
 * @throws {Error} envia una respuesta con su status correspondiente y el mensaje del error de la peticion
 * @description - si no quieres enviar status y/o mensaje de la peticion habran respuesta predeterminas para cuando no envies ninguna de las 2, pero deberas return un objeto vacio "return {}"
 * @example
 * sendServe(response,() => controllador(body.user,body.password))
 */
export function sendServer(
  response: Response,
  controllerFn: () => Promise<send>
) {
  controllerFn()
    .then(({ statusOk = 200, message = 'success' }) => {
      response.status(Number(statusOk)).send({
        success: message,
      });
    })
    .catch((error: unknown) => {
      const customError =
        error instanceof Error ? error.message.split('-') : null;
      const statusCode = customError ? Number(customError[0]) : 500;
      const errorMessage = customError ? customError[1] : 'error fatal server';

      response.status(statusCode).send(errorMessage);
    });
}

/**
 * Función que se encarga de dar respuesta concreta al frontend con el token
 * @param {Response} response - response del network
 * @param {Function} controller - controlador de la peticion
 * @throws {Error} envia una respuesta con su status correspondiente y el mensaje del error de la peticion
 * @description - si no quieres enviar status y/o mensaje de la peticion habran respuesta predeterminas para cuando no envies ninguna de las 2, pero deberas return un objeto vacio "return {}"
 * @example
 * sendServe(response,() => controllador(body.user,body.password))
 */
export function sendServerWithHeader(
  response: Response,
  controllerFn: () => Promise<sendWithHeader>
) {
  controllerFn()
    .then(
      ({ status = 200, token, messageSuccess = 'success' }: sendWithHeader) => {
        response.status(Number(status)).header('auth-token', token).send({
          success: messageSuccess,
        });
      }
    )
    .catch((error: unknown) => {
      const customError =
        error instanceof Error ? error.message.split('-') : null;
      const statusCode = customError ? Number(customError[0]) : 500;
      const errorMessage = customError ? customError[1] : 'error fatal server';

      response.status(statusCode).send(errorMessage);
    });
}
