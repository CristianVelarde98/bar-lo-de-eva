import express from 'express';
// import indexRoute from './routes/index.routes';
import router from './routes/index.routes';

const app = express();
app.use(express.json()); // habilita el body-parser
// app.use(cors());

// funcion encarga de todo el router de la api
router(app);

app.listen(3030, () => {
  console.log('server iniciado en el puerto 3030');
});
