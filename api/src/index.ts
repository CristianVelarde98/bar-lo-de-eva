/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import configureRoutes from './routes/index.routes';

dotenv.config();
const { PORT, MONGO_URL } = process.env;

const app = express();
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3030'] }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// funcion encarga de todo el router de la api
configureRoutes(app);

// * eslint nose por que no deja usar este tipado
interface MongooseConnectionResponse {
  _id: number;
  host: string;
  port: number;
  user: string;
  pass: string;
  name: string;
}
mongoose.set('strictQuery', false);

// MONGO_URL puede ser Undefined || null
// tambien se eleimino el parametro del then ya que no se usar
if (MONGO_URL)
  mongoose
    .connect(MONGO_URL)
    .then((res: MongooseConnectionResponse) =>
      console.log('conectado a mongoDB atlas')
    )
    .catch((err: Error) => console.log(err));

app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`);
});
