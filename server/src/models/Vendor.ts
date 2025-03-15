import mongoose, { Document, Schema } from 'mongoose';

export interface IVendor extends Document {
    businessName: string;
    email: string;
    password: string;
    phone: string;
    description: string;
    category: string[];
    location: {
        address: string;
        city: string;
        country: string;
        coordinates?: [number, number];
    };
    services: Schema.Types.ObjectId[];
    gallery: string[];
    rating: number;
    reviews: [{
        user: Schema.Types.ObjectId;
        rating: number;
        comment: string;
        date: Date;
    }];
    availability: {
        dates: Date[];
        exceptions: Date[];
    };
    verified: boolean;
    subscription: {
        plan: 'free' | 'premium' | 'professional';
        validUntil: Date;
    };
}

const VendorSchema = new Schema({
    businessName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    description: String,
    category: [{
        type: String,
        required: true
    }],
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
    services: [{
        type: Schema.Types.ObjectId,
        ref: 'Service'
    }],
    gallery: [String],
    rating: {
        type: Number,
        default: 0
    },
    reviews: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: Number,
        comment: String,
        date: {
            type: Date,
            default: Date.now
        }
    }],
    availability: {
        dates: [Date],
        exceptions: [Date]
    },
    verified: {
        type: Boolean,
        default: false
    },
    subscription: {
        plan: {
            type: String,
            enum: ['free', 'premium', 'professional'],
            default: 'free'
        },
        validUntil: Date
    }
}, {
    timestamps: true
});

VendorSchema.index({ email: 1 }, { unique: true });
VendorSchema.index({ category: 1 });
VendorSchema.index({ 'location.coordinates': '2dsphere' });
VendorSchema.index({ rating: -1 });

export default mongoose.model<IVendor>('Vendor', VendorSchema); 