import configureRoutes from '@router/index.routes';
import mongooseServer from '@database/mongoose';
import { testNotion } from '@helpers/notionModels';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
dotenv.config();
const { PORT, NOTION_EVENTS_ID } = process.env;
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
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);

// * api v1 and api v2
// configureRoutes(app, 'v1');
configureRoutes(app, 'v2');
/*
if (NOTION_EVENTS_ID === undefined)
  throw new Error('NOTION_EVENTS_ID es undefined');
testNotion(NOTION_EVENTS_ID);
*/
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
