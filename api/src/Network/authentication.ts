import { Request, Response, Router } from 'express';
import {
  SingInController,
  SingUpController,
} from '@controllers/authentication';
import { sendServer, sendServerWithHeader } from '@helpers/responseServer';

const router = Router();

router.post('/singup', async (request: Request, response: Response) => {
  sendServer(response, () => SingUpController(request.body));
});

router.post('/signin', async (request: Request, response: Response) => {
  sendServerWithHeader(response, () => SingInController(request.body));
});

export default router;
