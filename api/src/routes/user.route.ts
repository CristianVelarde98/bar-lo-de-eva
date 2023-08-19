import { Router, Request, Response } from 'express';
import UserModel from '@models/user.ts';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, keyLevel, password } = req.body;

    const user = new UserModel({
      name,
      keyLevel,
      password,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al guardar el usuario' });
  }
});

export default router;
