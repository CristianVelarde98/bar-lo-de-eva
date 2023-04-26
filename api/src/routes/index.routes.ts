import { Router } from 'express';

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
