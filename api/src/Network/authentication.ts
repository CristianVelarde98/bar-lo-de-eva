import { Request, Response, Router } from 'express';
// controllers
import { Singin, Singup } from '@controllers/authentication';
// Helpers
import { sendServeHeader, sendServe } from '@helpers/responseServer';
import { verifyJWTToken } from '@/Store/authentication';

const router = Router();

router.post('/signIn', (request: Request, response: Response) => {
  const { user, password } = request.body;
  sendServeHeader(response, () => Singin(user, password));
});

router.post('/signUp', (request: Request, response: Response) => {
  const { user, password, confirmPassword } = request.body;
  sendServe(response, () => Singup(user, password, confirmPassword));
});

router.post('/verify-token', async (request: Request, response: Response) => {
  const { token } = request.body;
  try {
    const verify = await verifyJWTToken({token});
    if (verify) {
      response.status(200).send({
        user: verify.userName,
        authenticated: true
      });
    }
    else {
      response.status(401).send({
        authentication: false,
        message: 'Invalid token'
      });
    }
  }
  catch (err: any) {
    response.status(401).send({
      authentication: false
    })
    console.error(err.message);
  }
})

export default router;
