import express from 'express';
import Menu, { IMenu } from '../Models/menu.ts';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const menus: IMenu[] = await Menu.find();
    res.json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el menú' });
  }
});

export default router;
