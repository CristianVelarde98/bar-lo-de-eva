export const findErrorPropertiesAsync = (
  args: string[],
  obj: Record<string, any>
) => {
  return new Promise((resolve, reject) => {
    for (const arg of args) {
      if (!obj.hasOwnProperty(arg)) reject(`propiedad ${arg} no se encontro`);
    }
    resolve(true);
  });
};

export const isEmptyAsync = (args: any[]) => {
  return new Promise((resolve, reject) => {
    for (const arg of args)
      if (arg === undefined) reject(`propiedad es undefined`);
    resolve(true);
  });
};
