export const findErrorPropertiesAsync = (
  properties: string[],
  obj: Record<string, any> | undefined
): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!obj) {
      reject('El objeto es undefined');
    } else {
      for (const prop of properties) {
        if (!obj.hasOwnProperty(prop)) {
          reject(`La propiedad ${prop} no se encontró`);
        }
      }
      resolve();
    }
    resolve();
  });
};

export const isEmptyAsync = (args: any[] | undefined): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!args) {
      reject('El array es undefined');
    } else {
      for (const arg of args) {
        console.log(args,arg);
        if (arg === undefined) {
          reject('Una propiedad es undefined');
        }
      }
      resolve();
    }
    resolve();
  });
};
