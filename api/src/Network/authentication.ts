import { Request, Response, Router } from 'express';
// controllers
import { Singin } from '@controllers/authentication';
// Helpers
import { sendServeHeader } from '@helpers/responseServer';

const router = Router();

router.post('/', (request: Request, response: Response) => {
  const { user, password } = request.body;
  sendServeHeader(response, () => Singin(user, password));
});

export default router;
