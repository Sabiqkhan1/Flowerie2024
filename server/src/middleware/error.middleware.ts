import { Request, Response, NextFunction } from 'express';
import logger from '../services/logger.service';
import { MulterError } from 'multer';

export const errorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    logger.error('Error:', error);

    if (error instanceof MulterError) {
        return res.status(400).json({
            error: 'File Upload Error',
            details: error.message
        });
    }

    if (error.name === 'ValidationError') {
        return res.status(400).json({
            error: 'Validation Error',
            details: Object.values(error.errors).map((err: any) => err.message)
        });
    }

    if (error.name === 'MongoError' && error.code === 11000) {
        return res.status(409).json({
            error: 'Duplicate Error',
            details: 'This record already exists'
        });
    }

    res.status(500).json({
        error: 'Server Error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
}; 