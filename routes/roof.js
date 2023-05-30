import express from 'express';
import {
  getStatus,
  getStatusNoAuth,
  postStatus,
  updateStatus,
  updateStatusNoAuth,
} from '../controllers/roof.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', verifyToken, postStatus);
router.get('/', verifyToken, getStatus);
router.get('/:userId', getStatusNoAuth);
router.put('/', verifyToken, updateStatus);
router.put('/:userId', updateStatusNoAuth);

export default router;
