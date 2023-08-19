import { Router, Express } from 'express';
import authentication from '@network/authentication';
import productsRouter from '@network/products';
import userRouter from '@router/user.route';
import menuRouter from '@router/menu.route';
import newsletterRouter from '@router/newsletter.route';
import eventosRouter from '@router/eventos.route';

type TRouter = {
  path: string;
  router: Router;
};

const routes: TRouter[] = [
  { path: '/auth', router: authentication },
  { path: '/users', router: userRouter },
  { path: '/menu', router: menuRouter },
  { path: '/newsletter', router: newsletterRouter },
  { path: '/eventos', router: eventosRouter },
  { path: '/product', router: productsRouter },
];

function configureRoutes(server: Express) {
  routes.forEach(({ path, router }) => {
    server.use(path, router);
  });
}

export default configureRoutes;
