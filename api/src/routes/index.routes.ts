import { Router } from 'express';

const router = Router();

router.get('/api', (req, res) => {
  res.status(200).json({ mensaje: 'estas en la ruta /api' });
});

export default router;
