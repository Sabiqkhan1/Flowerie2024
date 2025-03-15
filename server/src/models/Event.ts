import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
    title: string;
    type: 'wedding' | 'birthday' | 'corporate' | 'other';
    date: Date;
    budget: number;
    location: {
        address: string;
        city: string;
        country: string;
        coordinates?: [number, number];
    };
    owner: Schema.Types.ObjectId;
    guests: {
        expected: number;
        confirmed: number;
    };
    vendors: [{
        vendor: Schema.Types.ObjectId;
        service: Schema.Types.ObjectId;
        status: 'pending' | 'confirmed' | 'completed';
        price: number;
    }];
    moodboard: Schema.Types.ObjectId;
    status: 'planning' | 'upcoming' | 'completed';
}

const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['wedding', 'birthday', 'corporate', 'other'],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    location: {
        address: String,
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        }
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    guests: {
        expected: Number,
        confirmed: {
            type: Number,
            default: 0
        }
    },
    vendors: [{
        vendor: {
            type: Schema.Types.ObjectId,
            ref: 'Vendor'
        },
        service: {
            type: Schema.Types.ObjectId,
            ref: 'Service'
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'completed'],
            default: 'pending'
        },
        price: Number
    }],
    moodboard: {
        type: Schema.Types.ObjectId,
        ref: 'MoodBoard'
    },
    status: {
        type: String,
        enum: ['planning', 'upcoming', 'completed'],
        default: 'planning'
    }
}, {
    timestamps: true
});

EventSchema.index({ owner: 1 });
EventSchema.index({ date: 1 });
EventSchema.index({ 'location.coordinates': '2dsphere' });
EventSchema.index({ status: 1 });

export default mongoose.model<IEvent>('Event', EventSchema); 