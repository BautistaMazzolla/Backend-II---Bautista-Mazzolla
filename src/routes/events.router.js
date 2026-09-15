import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ status: 'success', payload: [] });
});

export default router;