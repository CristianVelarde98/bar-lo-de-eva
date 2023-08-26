import { Request, Response, Router } from 'express';
import { responseHttp } from '@helpers/response';
import {
  CEventsPost,
  CEventsGet,
  CEventsPath,
  CEventsDelete,
} from '@controllers/events_v2';
const router = Router();

router.get('/', async (request: Request, response: Response) => {
  responseHttp(response, () => CEventsGet(request.query));
});

router.post('/', async (request: Request, response: Response) => {
  responseHttp(response, () => CEventsPost(request));
});

router.patch('/', async (request: Request, response: Response) => {
  responseHttp(response, () => CEventsPath(request));
});

router.delete('/', async (request: Request, response: Response) => {
  responseHttp(response, () => CEventsDelete(request.query));
});

export default router;
