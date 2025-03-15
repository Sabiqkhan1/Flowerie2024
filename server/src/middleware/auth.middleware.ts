import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Vendor from '../models/Vendor';
import logger from '../services/logger.service';

const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error('No token provided');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            id: string;
            type: 'user' | 'vendor';
        };

        // Find user and attach to request
        const Model = decoded.type === 'user' ? User : Vendor;
        const user = await (Model as any).findById(decoded.id);

        if (!user) {
            throw new Error('User not found');
        }

        req.user = user;
        req.userId = decoded.id;
        req.userType = decoded.type;

        next();
    } catch (error) {
        logger.error('Authentication error:', error);
        res.status(401).json({ 
            error: 'Please authenticate',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

export { auth }; 