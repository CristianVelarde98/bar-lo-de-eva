import { Request, Response, Router } from 'express';
import {
  CProductDelete,
  CProductGet,
  CProductPost,
  CProductUpdate,
} from '@controllers/products';
import { responseHttp } from '@helpers/response';
const router = Router();

router.get('/', async (request: Request, response: Response) => {
  responseHttp(response, () => CProductGet(request.query));
});

router.post('/', async (request: Request, response: Response) => {
  responseHttp(response, () => CProductPost(request.body));
});

router.patch('/', async (request: Request, response: Response) => {
  responseHttp(response, () => CProductUpdate(request.body));
});

router.delete('/', async (request: Request, response: Response) => {
  responseHttp(response, () => CProductDelete(request.query));
});

export default router;
