import { Router } from 'express';
// controllers
import { Singin } from 'src/Controllers/authentication';
// Helpers
import { sendServe } from 'src/Helpers/responseServer';

const router = Router();

router.get('/', (request, response) => {
  const { gmail, password } = request.body;
  sendServe(response, () => Singin(gmail, password));
});

export default router;
