import { Router } from 'express';

const router = new Router();

router.get('/', async (req, res) => {
  res.send('HELLO WORLD');
});

export default router;
