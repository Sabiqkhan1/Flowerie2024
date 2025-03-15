import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
    vendor: Schema.Types.ObjectId;
    name: string;
    description: string;
    category: string;
    basePrice: number;
    images: string[];
    features: string[];
    customization: {
        option: string;
        price: number;
    }[];
    availability: {
        date: Date;
        slots: number;
    }[];
}

const ServiceSchema = new Schema({
    vendor: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true
    },
    basePrice: {
        type: Number,
        required: true
    },
    images: [String],
    features: [String],
    customization: [{
        option: String,
        price: Number
    }],
    availability: [{
        date: Date,
        slots: Number
    }]
}, {
    timestamps: true
});

export default mongoose.model<IService>('Service', ServiceSchema); 