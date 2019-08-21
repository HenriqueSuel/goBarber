import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// User
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

// sessions
routes.post('/sessions', SessionController.store);

// Foto
routes.post('/files', upload.single('file'), FileController.store);

// Router Authorization
routes.use(authMiddlewares);

export default routes;
