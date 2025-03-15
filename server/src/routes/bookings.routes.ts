import { Router } from 'express';
import { auth } from '../middleware/auth.middleware';
import {
    createBooking,
    confirmBooking,
    getBookings
} from '../controllers/bookings/bookingController';

const router = Router();

router.post('/', auth, createBooking);
router.post('/confirm', auth, confirmBooking);
router.get('/', auth, getBookings);

export default router; 