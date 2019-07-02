import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Henrique Suel',
    email: 'h.suel17@hotmail.com',
    password_hash: 'teste123',
  });
  return res.json(user);
});

export default routes;
