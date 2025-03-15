import { Request, Response, NextFunction } from 'express';
import { cacheGet, cacheSet } from '../services/cache.service';
import logger from '../services/logger.service';

interface CacheOptions {
    duration?: number;
    key?: (req: Request) => string;
}

export const cacheMiddleware = (options: CacheOptions = {}) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const key = options.key ? 
                options.key(req) : 
                `${req.method}:${req.originalUrl}`;

            const cachedData = await cacheGet(key);
            if (cachedData) {
                return res.json(JSON.parse(cachedData));
            }

            // Store original send function
            const originalSend = res.json;

            // Override send function
            res.json = function(body: any): Response {
                // Restore original send
                res.json = originalSend;

                // Cache the response
                if (res.statusCode === 200) {
                    cacheSet(
                        key,
                        JSON.stringify(body),
                        options.duration || 3600 // Default 1 hour
                    ).catch(err => logger.error('Cache set error:', err));
                }

                // Send the response
                return originalSend.call(this, body);
            };

            next();
        } catch (error) {
            logger.error('Cache middleware error:', error);
            next();
        }
    };
}; 