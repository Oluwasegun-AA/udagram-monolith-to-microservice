import { Router, Request, Response } from 'express';

import { User } from '../models/User';
import { AuthRouter } from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/');

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await User.findByPk(id);
    res.send(item);
  }
  catch (err) {
    console.log(err);
  }
});

export const UserRouter: Router = router;
