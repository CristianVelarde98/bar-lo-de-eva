import express from 'express';
import indexRoute from './routes/index.routes';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ mensjae: 'hola server' });
});

app.use('/', indexRoute);

app.listen(3030, () => {
  console.log('server iniciado en el puerto 3030');
});
