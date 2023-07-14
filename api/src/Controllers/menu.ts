import { ObjectId } from 'mongodb';
import Menu, { IMenu } from '../Models/menu.ts';

export async function traerMenu(): Promise<IMenu[]> {
  try {
    const menus: IMenu[] = await Menu.find();
    return menus;
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
}

export async function agregarPlato(platoNuevo: IMenu) {
  try {
    const plato: IMenu = new Menu(platoNuevo);
    const respuesta: IMenu = await plato.save();
    return respuesta;
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
}

export async function modificarPlato(plato: IMenu) {
  try {
    const otroId = new ObjectId(plato.id);
    const aux = await Menu.findById(otroId);
    if (!aux) throw new Error('no se encontro el plato solicitado');
    const info: object = {
      nombre: plato.nombre ? plato.nombre : aux.nombre,
      precio: plato.precio ? plato.precio : aux.precio,
      descripcion: plato.descripcion ? plato.descripcion : aux.descripcion,
      columna: plato.columna ? plato.columna : aux.columna,
    };
    await Menu.findByIdAndUpdate(
      { _id: otroId },
      { $set: info },
      { returnOriginal: false }
    );

    return 'modificacion realizada con exito';
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
}

export async function eliminarPlato(id: string) {
  try {
    const otroId = new ObjectId(id);
    const aux = await Menu.findByIdAndDelete(otroId);
    if (!aux) throw new Error('no exite un plato con ese id');
    return `se elimino con exito el plato: ${aux.nombre}`;
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
}
