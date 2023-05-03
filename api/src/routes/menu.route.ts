import express from 'express';
import { IMenu } from '../Models/menu.ts';
import {
  agregarPlato,
  traerMenu,
  modificarPlato,
  eliminarPlato,
} from '../Controllers/menu.ts';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const menus: IMenu[] = await traerMenu();
    res.status(200).json(menus);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

router.post('/', async (req, res) => {
  try {
    const plato: IMenu = req.body;
    const mensaje: IMenu = await agregarPlato(plato);
    if (mensaje.nombre)
      res.status(200).json({ mensaje: 'plato agregado con exito' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

router.put('/', async (req, res) => {
  try {
    if (!req.body.id) throw new Error('falta el campo id');
    const respuesta: string = await modificarPlato(req.body);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

router.delete('/', async (req, res) => {
  if (typeof req.query.id !== 'string') {
    throw new Error('el parámetro id debe ser un string');
  }
  const { id } = req.query;
  try {
    if (!req.query.id) throw new Error('falta el campo id');
    const respuesta: string = await eliminarPlato(id);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
