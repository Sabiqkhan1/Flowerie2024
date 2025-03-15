import { Request } from 'express';
import { IUser } from '../models/User';
import { IVendor } from '../models/Vendor';

declare global {
    namespace Express {
        interface Request {
            user?: IUser | IVendor;
            userId?: string;
            userType?: 'user' | 'vendor';
            files?: { [fieldname: string]: Express.Multer.File[] } | Express.Multer.File[];
        }
    }
} 