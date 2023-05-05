import { Request, Response, Router } from 'express';
// controllers
import { Singin, Singup } from '@controllers/authentication';
// Helpers
import { sendServeHeader,sendServe } from '@helpers/responseServer';

const router = Router();

router.post('/singin', (request: Request, response: Response) => {
  const { user, password } = request.body;
  sendServeHeader(response, () => Singin(user, password));
});

router.post('/singup', (request: Request, response: Response) => {
  const { user, password, confirmPassword } = request.body;
  sendServe(response, () => Singup(user, password, confirmPassword));
});

export default router;
