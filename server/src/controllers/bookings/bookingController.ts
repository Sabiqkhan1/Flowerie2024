import { Request, Response } from 'express';
import Booking from '../../models/Booking';
import Service from '../../models/Service';
import Vendor from '../../models/Vendor';
import User from '../../models/User';
import { createPaymentIntent, confirmPayment } from '../../services/payment.service';
import { sendBookingConfirmation } from '../../services/email.service';
import { asyncHandler } from '../../utils/asyncHandler';

export const createBooking = asyncHandler(async (req: Request, res: Response) => {
    const booking = new Booking({
        vendor: req.body.vendorId,
        user: req.userId,
        date: req.body.date,
        service: req.body.serviceId
    });
    
    await booking.save();
    return res.status(201).json({ success: true, booking });
});

export const confirmBooking = async (req: Request, res: Response) => {
    try {
        const { bookingId, paymentIntentId } = req.body;

        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        const paymentResult = await confirmPayment(bookingId, paymentIntentId);
        if (!paymentResult.success) {
            return res.status(400).json({ error: 'Payment failed' });
        }

        booking.status = 'confirmed';
        booking.payment.status = 'completed';
        booking.payment.transactionId = paymentResult.transactionId;
        await booking.save();

        // Send confirmation emails
        const [user, vendor] = await Promise.all([
            User.findById(booking.user),
            Vendor.findById(booking.vendor)
        ]);

        if (user && vendor) {
            await sendBookingConfirmation(booking, user, vendor);
        }

        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getBookings = async (req: Request, res: Response) => {
    try {
        const bookings = await Booking.find({ user: req.userId })
            .populate('service')
            .populate('vendor')
            .populate('event')
            .sort({ date: 'asc' });

        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}; 