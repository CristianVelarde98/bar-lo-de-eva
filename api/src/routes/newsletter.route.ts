import express from 'express';
import { INewsletter } from '../Models/newsletter.ts';
import { agregarSub, enviarCadena } from '../Controllers/newsletter.ts';
import Joi from 'joi';

const validator = require('email-validator');

const router = express.Router();

const eventoSchema = Joi.object({
  encabezado: Joi.string().required(),
  titulo: Joi.string().required(),
  imagen: Joi.string().uri().required(),
  descripcion: Joi.string().required(),
});

router.post('/suscribirse', async (req, res) => {
  console.log("pasamos por aca");
  
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

router.post('/enviar', async (req, res) => {
  try {
    const nuevoEvento = await eventoSchema.validateAsync(req.body);
    const cadena = await enviarCadena(nuevoEvento);
    res.status(200).json({ mensaje: cadena });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
