import express from 'express';
import { IEvento } from '@/Models/eventos';
import {
  traerEventos,
  agregarEvento,
  eliminarEvento,
} from '../Controllers/eventos';
import { string } from 'joi';

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
    res.status(400).json({ error: (error as Error).message });
  }
});

router.delete('/', async (req, res) => {
  const { id } = req.query;
  try {
    if (!id) throw new Error('falta parametro id');
    if (typeof id !== 'string') throw new Error('id invalido');
    const respuesta: string = await eliminarEvento(id);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
