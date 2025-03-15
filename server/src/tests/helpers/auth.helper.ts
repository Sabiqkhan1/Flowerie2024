import jwt from 'jsonwebtoken';
import User from '../../models/User';
import Vendor from '../../models/Vendor';
import { IUser } from '../../models/User';
import { Document } from 'mongoose';

export const generateUserToken = (userId: string): string => {
    return jwt.sign(
        { id: userId, type: 'user' },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' }
    );
};

export const createTestUser = async () => {
    const user = (await User.create({
        email: 'test@example.com',
        password: 'password123',
        firstName: 'Test',
        lastName: 'User'
    })) as IUser & Document;
    
    const token = generateUserToken(user._id.toString());
    return { user, token };
}; 