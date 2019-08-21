import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ProviderController from './app/controllers/ProviderController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// sessions
routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

// Router Authorization
routes.use(authMiddlewares);

// User
routes.put('/users', UserController.update);

// Providers
routes.get('/providers', ProviderController.index);

// Calendario
routes.post('/appointments', AppointmentController.store);

// Foto
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
