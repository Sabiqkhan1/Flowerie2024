import Stripe from 'stripe';
import { IBooking } from '../models/Booking';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia'
});

export const createPaymentIntent = async (booking: IBooking) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: booking.payment.amount * 100,
        currency: 'usd',
        metadata: {
            bookingId: booking._id.toString()
        }
    });
    return paymentIntent.client_secret;
};

export const confirmPayment = async (bookingId: string, paymentIntentId: string) => {
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        
        if (paymentIntent.status === 'succeeded') {
            return {
                success: true,
                transactionId: paymentIntent.id
            };
        }

        return { success: false };
    } catch (error) {
        throw new Error('Error confirming payment');
    }
}; 