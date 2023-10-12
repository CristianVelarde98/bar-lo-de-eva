type Arg = {
  [x: string]: string;
};

type ArgVery = {
  property: string;
  regex: RegExp;
  message: string;
};

export function isEmpty(arg: Arg) {
  for (const key in arg) {
    if (arg[key].length === 0 || arg[key] === undefined)
      throw new Error(`400-El campo ${key} esta vacio`);
  }
}

export function regexVery(arg: ArgVery[]) {
  for (const iterator of arg) {
    const validate = new RegExp(iterator.regex);
    if (!validate.test(iterator.property))
      throw new Error(
        `401-El valor no es valido, ${iterator.message}`
      );
  }
}
