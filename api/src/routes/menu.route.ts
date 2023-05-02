import express from 'express';
import { IMenu } from '../Models/menu.ts';
import { agregarPlato, traerMenu } from '../Controllers/menu.ts';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const menus: IMenu[] = await traerMenu();
    res.status(200).json(menus);
  } catch (error) {
    res.status(400).json({ error: 'error al recuperar los datos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const plato: IMenu = req.body;
    const mensaje: IMenu = await agregarPlato(plato);
    if (mensaje.nombre)
      res.status(200).json({ mensaje: 'plato agregado con exito' });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'ocurrio un problema al finalizar el guardado' });
  }
});

export default router;
