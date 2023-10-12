import { Router, Express } from 'express';
import authentication from '@network/authentication';
import productsRouter from '@network/products';
import userRouter from '@router/user.route';
import menuRouter from '@router/menu.route';
import newsletterRouter from '@router/newsletter.route';
import eventosRouter from '@router/eventos.route';
import eventsRouter from '@network/events';
import mongooseServer from '@/database/mongoose';

type TRouter = {
  path: string;
  router: Router;
};

const routesVersions: Record<string, TRouter[]> = {
  v1: [
    { path: '/menu', router: menuRouter },
    { path: '/eventos', router: eventosRouter },
  ],
  v2: [
    { path: '/auth', router: authentication },
    { path: '/users', router: userRouter },
    { path: '/newsletter', router: newsletterRouter },
    { path: '/product', router: productsRouter },
    { path: '/events', router: eventsRouter },
  ],
};

/**
 * configureRoutes permite inicializar los endpoints con su respectiva version
 * @param server
 * @param version
 * @description cuando se una la v1 el requerira la funcion mongooseServer la v2 no la requerira
 */
function configureRoutes(server: Express, version: string) {
  const selectedRoutes = routesVersions[version] || [];
  if (selectedRoutes.length === 0)
    throw new Error(`version no encontrada ${version}`);
  selectedRoutes.forEach(({ path, router }) => {
    server.use(`/api/${version}${path}`, router);
  });
  mongooseServer();
  if (version === 'v1') mongooseServer();
}

export default configureRoutes;
