import nodemailer from 'nodemailer';
import { IBooking } from '../models/Booking';
import { IUser } from '../models/User';
import { IVendor } from '../models/Vendor';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

export const sendBookingConfirmation = async (
    booking: IBooking,
    user: IUser,
    vendor: IVendor
) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: user.email,
            subject: 'Booking Confirmation',
            html: `
                <h1>Booking Confirmed!</h1>
                <p>Your booking with ${vendor.businessName} has been confirmed.</p>
                <p>Date: ${booking.date.toLocaleDateString()}</p>
                <p>Amount: $${booking.payment.amount}</p>
                <p>Status: ${booking.status}</p>
            `
        });

        // Send notification to vendor
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: vendor.email,
            subject: 'New Booking',
            html: `
                <h1>New Booking Received</h1>
                <p>You have a new booking from ${user.firstName} ${user.lastName}.</p>
                <p>Date: ${booking.date.toLocaleDateString()}</p>
                <p>Amount: $${booking.payment.amount}</p>
            `
        });
    } catch (error) {
        throw new Error('Error sending email');
    }
}; 