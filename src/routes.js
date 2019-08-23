import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ProviderController from './app/controllers/ProviderController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import AppointmentController from './app/controllers/AppointmentController';
import SheduleController from './app/controllers/SheduleController';
import NotificationController from './app/controllers/NotificationController';

import authMiddlewares from './app/middlewares/auth';
import AvailableController from './app/controllers/AvailableController';

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
routes.get('/providers/:providerId/available', AvailableController.index);

// Calendario
routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);

// Calendario do prestador
routes.get('/schedule', SheduleController.index);

// Foto
routes.post('/files', upload.single('file'), FileController.store);

// nodificação
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;
