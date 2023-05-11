import express from 'express';
import { IEvento } from '@/Models/eventos';
import Joi from 'joi';
import { traerEventos, agregarEvento } from '../Controllers/eventos';

const router = express.Router();

interface eventoAux {
  inicio: Date;
  fin: Date;
  imagen: Buffer;
}

router.get('/', async (req, res) => {
  try {
    const eventos = req.query.eventos;
    if (!eventos || (eventos !== 'todos' && eventos !== 'futuros'))
      throw new Error('Parámetros de consulta incorrectos');
    const futurosEventos: IEvento[] = await traerEventos(eventos);
    res.status(200).json(futurosEventos);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoEvento: eventoAux = req.body;
    const respuesta: string = await agregarEvento(nuevoEvento);
    res.status(200).json(respuesta);
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: (error as Error).message });
  }
});

router.post('/ahh', (req, res) => {
  console.log('algo llego');

  console.log(req.body);

  res.json('hola');
});

export default router;
