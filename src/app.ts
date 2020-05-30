import express, { Application, json, urlencoded } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { config } from './config';
import IndexRoutes from './routes/index.routes';

const {
  APP: { NODE_ENV },
} = config;

const app: Application = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
if (NODE_ENV === 'development') app.use(morgan('dev'));

app.use(IndexRoutes);

export default app;
