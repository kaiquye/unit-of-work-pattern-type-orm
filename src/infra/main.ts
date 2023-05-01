import 'reflect-metadata';
import * as dotenv from 'dotenv';
import './container/use-case-tsyringe';
import './container/repositorys-tsyring';

dotenv.config();
import express from 'express';
import { GlobalFilterError } from './http/filters/error.filter';
import { AppDataSource } from './database/typeorm/connection';
import AppRouter from './http/routes';

const server = express();
server.use(express.json());
server.use(AppRouter);
server.use(GlobalFilterError);
AppDataSource.initialize()
  .then(() => {
    server.listen(4000, () => console.log('server listening...'));
  })
  .catch((error) => {
    console.log('Error: database');
    console.log(error);
  });
