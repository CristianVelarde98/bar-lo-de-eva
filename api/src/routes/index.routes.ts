import { Router, Express } from 'express';

// * Networks
import authentication from '@network/authentication';

// mas facil y escalable segun yo
type tipadoRouter = {
  path: string;
  router: Router;
};

const routes: tipadoRouter[] = [
  { path: '/auth', router: authentication },
  // example
  // { path: 'link', router: 'el network' }
];

function router(server: Express) {
  routes.forEach(({ path, router }) => {
    server.use(path, router);
  });
}

export default router;
