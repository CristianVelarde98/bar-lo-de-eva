import express from 'express';
import { INewsletter } from '../Models/newsletter.ts';
import { agregarSub } from '../Controllers/newsletter.ts';

const validator = require('email-validator');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    if (!validator.validate(req.body.gmail)) {
      throw new Error('El correo electrónico no es válido');
    }
    const email: INewsletter = req.body;
    const nuevoSub: INewsletter = await agregarSub(email);
    if (nuevoSub.gmail)
      res
        .status(200)
        .json({ mensaje: 'gracias por estar al tanto de las novedades' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
