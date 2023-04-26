import { Request, Response, Router } from 'express';
// controllers
import { Singin } from '@controllers/authentication';
// Helpers
import { sendServeHeader } from '@helpers/responseServer';

const router = Router();

router.post('/', (request: Request, response: Response) => {
  const { gmail, password } = request.body;
  sendServeHeader(response, () => Singin(gmail, password));
});

export default router;
