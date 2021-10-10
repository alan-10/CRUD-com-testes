import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
const app = express();
import { routes } from './routes'

import '@shered/infra/typeorm';

import '@shered/container';

app.use(express.json());
app.use(cors());
app.use(routes);


export { app }
