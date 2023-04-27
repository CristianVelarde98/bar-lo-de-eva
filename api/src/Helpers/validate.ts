type Arg = {
  [x: string]: string;
};

type ArgVery = {
  property: string;
  regex: RegExp;
  message: string;
};

/**
 * isEmpty tiene como finalidad modularizar el detectar errores de parametros vacios
 * @param arg - es un objeto el cual contiene los datos a verificar
 * @throws - el directamente recorrera todo en busca de ver que esta vacio
 * @description - es valido para type number y string
 * @example
 * function prueba(param1:string,param2:string,param3:string){
 *  isEmpty({ param1, param2, param3 })
 * }
 */
export function isEmpty(arg: Arg) {
  Object.keys(arg).forEach((key) => {
    if (arg[key].length === 0) {
      throw new Error(`400-El campo ${key} está vacío`);
    }
  });
}

/**
 * regexVery busca validar por medio de regex y enviar un mensaje custom del error
 * @param arg array de objetos el cual cada objeto contiene el rejex el value y por ultimo un mensaje personalizado
 * @example
 * regexVery([
      {
        property: nickname,
        regex: /^[a-zA-Z0-9]{8,24}$/,
        message: 'no contenga simbolos,que sea minimo 8 caracteres y maximo 24',
      }
    ]);
 */
export function regexVery(arg: ArgVery[]) {
  arg.forEach((iterator) => {
    const validate = new RegExp(iterator.regex);
    if (!validate.test(iterator.property)) {
      throw new Error(
        `400-El valor ${iterator.property} no es válido, ${iterator.message}`
      );
    }
  });
}
