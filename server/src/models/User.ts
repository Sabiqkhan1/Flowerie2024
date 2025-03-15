import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    profileImage: String,
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    savedVendors: [{
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    }]
}, {
    timestamps: true
});

UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ createdAt: -1 });

export default mongoose.model<IUser>('User', UserSchema); 