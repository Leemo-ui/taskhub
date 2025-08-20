import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { listTasks, createTask, claimTask, completeTask, deleteTask } from '../controllers/tasks.js';

const router = Router();
router.get('/', auth, listTasks);
router.post('/', auth, createTask);
router.put('/:id/claim', auth, claimTask);
router.put('/:id/complete', auth, completeTask);
router.delete('/:id', auth, deleteTask);
export default router;
