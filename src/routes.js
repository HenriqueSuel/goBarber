import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

// User
routes.post('/users', UserController.store);

// sessions
routes.post('/sessions', SessionController.store);

// Router Authorization
routes.use(authMiddlewares);

routes.put('/users', UserController.update);
export default routes;
