import express from 'express';
// import indexRoute from './routes/index.routes';
import router from './routes/index.routes';

const app = express();
app.use(express.json()); // habilita el body-parser

// app.get('/', (req, res) => {
//   res.status(200).json({ mensjae: 'hola server' });
// });

// app.use('/', indexRoute);

// funcion encarga de todo el router de la api
router(app);

app.listen(3030, () => {
  console.log('server iniciado en el puerto 3030');
});
