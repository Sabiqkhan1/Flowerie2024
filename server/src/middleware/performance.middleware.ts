import { Request, Response, NextFunction } from 'express';
import { metrics } from '../services/monitoring.service';
import logger from '../services/logger.service';

export const performanceMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = process.hrtime();

    res.on('finish', () => {
        const duration = process.hrtime(start);
        const durationInSeconds = duration[0] + duration[1] / 1e9;

        // Record request duration
        metrics.httpRequestDuration.observe(
            {
                method: req.method,
                route: req.route?.path || 'unknown',
                status_code: res.statusCode
            },
            durationInSeconds
        );

        // Log slow requests (over 1 second)
        if (durationInSeconds > 1) {
            logger.warn(`Slow request: ${req.method} ${req.url} took ${durationInSeconds.toFixed(2)}s`);
        }
    });

    next();
}; 