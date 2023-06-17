import { Router, Express } from 'express';
import authentication from '@network/authentication';
// eslint-disable-next-line import/no-unresolved
import userRouter from './user.route';
import menuRouter from './menu.route';
import newsletterRouter from './newsletter.route';
import eventosRouter from './eventos.route';

// * Networks

// mas facil y escalable segun yo
type tipadoRouter = {
  path: string;
  router: Router;
};

const routes: tipadoRouter[] = [
  { path: '/auth', router: authentication },
  { path: '/users', router: userRouter },
  { path: '/menu', router: menuRouter },
  { path: '/newsletter', router: newsletterRouter },
  { path: '/eventos', router: eventosRouter },
];

function configureRoutes(server: Express) {
  routes.forEach(({ path, router }) => {
    server.use(path, router);
  });
}

export default configureRoutes;
