// eslint-disable-next-line import/no-unresolved
import configureRoutes from './routes/index.routes';
import menuRouter from './routes/menu.route';
import newsletterRouter from './routes/newsletter.route';

const express = require('express');
// import cors from 'cors';
const cors = require('cors');
const mongoose = require('mongoose');

const { PORT, MONGO_URL } = process.env;

const app = express();
app.use(express.json()); // habilita el body-parser
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3030'] }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// funcion encarga de todo el router de la api
app.use('/menu', menuRouter);
app.use('/newsletter', newsletterRouter);

configureRoutes(app);

interface MongooseConnectionResponse {
  _id: number;
  host: string;
  port: number;
  user: string;
  pass: string;
  name: string;
}

mongoose.set('strictQuery', false);

mongoose
  .connect(MONGO_URL)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .then((res: MongooseConnectionResponse) =>
    console.log('conectado a mongoDB atlas')
  )
  .catch((err: Error) => console.log(err));

app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`);
});
