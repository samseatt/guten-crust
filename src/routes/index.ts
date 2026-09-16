import { Router } from 'express';
import gutenDatalakeRoutes from './gutenDatalakeRoutes';

const router = Router();
router.use('/guten', gutenDatalakeRoutes);

export default router;
