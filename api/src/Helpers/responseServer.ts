import { Response } from 'express';

type controller = {
  statusOk?: number;
  message?: string;
};

type controllerHeader = {
  statusOk?: number;
  message?: string;
  token?: string;
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
export function sendServe(response: Response, controller: Function) {
  try {
    const { statusOk, message }: controller = controller();
    response.status(statusOk || 200).send(message || 'peticion sin mensage');
  } catch (error: any) {
    const customError = error.message.split('-');
    response
      .status(Number(customError[0]) || 500)
      .send(customError[1] || 'error fatal server');
  }
}

export function sendServeHeader(response: Response, controller: Function) {
  try {
    const { statusOk, token, message }: controllerHeader = controller();
    response
      .status(statusOk || 200)
      .header('auth-token', token)
      .send({
        success: message,
      });
  } catch (error: any) {
    const customError = error.message.split('-');
    response
      .status(Number(customError[0]) || 500)
      .send(customError[1] || 'error fatal server');
  }
}
