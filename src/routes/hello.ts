import { Router } from 'express';

const router = new Router();

router.get('/', async (req, res) => {
  res.send('HELLO WORLDs');
});

export default router;
