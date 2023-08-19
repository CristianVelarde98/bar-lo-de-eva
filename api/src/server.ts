import configureRoutes from '@router/index.routes';
import eventosRouter from '@router/eventos.route';
import { testNotion } from '@helpers/notionModels';
import express from 'express';
import cors from 'cors';

const { PORT } = process.env;
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:3030',
    ],
    credentials: true,
  })
);

configureRoutes(app);
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});