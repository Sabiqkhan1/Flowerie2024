import { Router } from 'express';
import { auth } from '../middleware/auth.middleware';
import { createEvent, getEvent, addVendorToEvent } from '../controllers/events/eventController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/', auth, asyncHandler(createEvent));
router.get('/:id', auth, asyncHandler(getEvent));
router.post('/:id/vendors', auth, asyncHandler(addVendorToEvent));

export default router; 