export const findProperties = (args: string[], obj: Record<string, any>) => {
  for (const arg of args) {
    if (!obj.hasOwnProperty(arg))
      throw new Error(`propiedad ${arg} no se encontro`);
  }
};

export const isEmpty = (args: string[]) => {
  for (const arg of args)
    if (arg === undefined) throw new Error(`propiedad es undefined`);
};
