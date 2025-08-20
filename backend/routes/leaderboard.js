import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { topUsers } from '../controllers/leaderboard.js';

const router = Router();
router.get('/', auth, topUsers);
export default router;
