import { Router } from 'express';
import authRoutes from './auth.routes';
// Comment out until events routes is ready
import eventRoutes from './events.routes';
import bookingRoutes from './bookings.routes';
import serviceRoutes from './services.routes';

const router = Router();

router.use('/auth', authRoutes);
// router.use('/events', eventRoutes);
router.use('/bookings', bookingRoutes);
router.use('/services', serviceRoutes);

export default router; 