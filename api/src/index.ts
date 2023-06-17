// eslint-disable-next-line import/no-unresolved
import configureRoutes from './routes/index.routes';
import eventosRouter from './routes/eventos.route';

const express = require('express');
// import cors from 'cors';
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT, MONGO_URL } = process.env;

const app = express();
app.use(express.json({ limit: '50mb' })); // habilita el body-parser
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3030'],
    credentials: true,
  })
);

// funcion encarga de todo el router de la api

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
  .then((res: MongooseConnectionResponse) => {
    console.log('conectado a mongoDB atlas');
    app.listen(PORT, () => {
      console.log(`servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err: Error) => console.log(err));
