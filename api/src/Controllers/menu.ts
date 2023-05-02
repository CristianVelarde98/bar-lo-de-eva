import Menu, { IMenu } from '../Models/menu.ts';

export async function traerMenu(): Promise<IMenu[]> {
  try {
    const menus: IMenu[] = await Menu.find();
    return menus;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function agregarPlato(platoNuevo: IMenu) {
  try {
    const plato: IMenu = new Menu(platoNuevo);
    const respuesta: IMenu = await plato.save();
    return respuesta;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
