import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import mongoSanitize from 'express-mongo-sanitize';

// Content Security Policy configuration
const cspConfig = {
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'", process.env.CLIENT_URL || ''],
        fontSrc: ["'self'", 'https:', 'data:'],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"]
    }
};

export const securityMiddleware = [
    // Basic security headers
    helmet(),
    
    // Content Security Policy
    helmet.contentSecurityPolicy(cspConfig),
    
    // Prevent parameter pollution
    hpp(),
    
    // Sanitize MongoDB queries
    mongoSanitize(),
    
    // Custom security headers
    (req: Request, res: Response, next: NextFunction) => {
        res.setHeader('Permissions-Policy', 'geolocation=()');
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        next();
    }
]; 