import { Router, Express } from 'express';

// * Networks
import authentication from '@network/authentication';
import userRouter from './user.route';

type tipadoRouter = {
  path: string;
  router: Router;
};

const routes: tipadoRouter[] = [
  { path: '/auth', router: authentication },
  { path: '/users', router: userRouter },
];

/**
 * Funcion encargada de crear el router
 * @param server - recibe el app.express() para crear las routes
 * @description mediante el objeto routes ella podra crear las rutas de forma mas dinamica
 * @example
 * const app = express();
 * configureRoutes(app);
 */
function configureRoutes(server: Express) {
  routes.forEach(({ path, router }) => {
    server.use(path, router);
  });
}

export default configureRoutes;
