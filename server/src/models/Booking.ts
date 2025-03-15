import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IBooking extends Document {
    _id: Types.ObjectId;
    event: Types.ObjectId;
    vendor: Types.ObjectId;
    user: Types.ObjectId;
    date: Date;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    payment: {
        amount: number;
        status: string;
        transactionId?: string;
    };
}

const BookingSchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    vendor: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    },
    payment: {
        amount: Number,
        status: String,
        transactionId: String
    },
}, {
    timestamps: true
});

export default mongoose.model<IBooking>('Booking', BookingSchema); 