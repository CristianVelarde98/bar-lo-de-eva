import { Express } from 'express';
import mongoose from 'mongoose';
const { PORT, MONGO_URL } = process.env;
interface MongooseConnectionResponse {
  _id: number;
  host: string;
  port: number;
  user: string;
  pass: string;
  name: string;
}

export default async function mongooseServer() {
  try {
    mongoose.set('strictQuery', false);
    if (process.env.MONGO_URL) {
      await mongoose.connect(process.env.MONGO_URL);
      console.log('Conectado a MongoDB Atlas');
    } else {
      throw new Error('Error al obtener la URL de mongoose');
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
}
