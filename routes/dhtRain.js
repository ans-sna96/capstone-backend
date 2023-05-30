import express from 'express';
import {
  getDhtRain,
  postDhtRain,
  updateDhtOnly,
  updateDhtRain,
} from '../controllers/dhtRain.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', verifyToken, postDhtRain);
router.put('/', verifyToken, updateDhtRain);
router.put('/:userId', updateDhtOnly);
router.get('/', verifyToken, getDhtRain);

export default router;
