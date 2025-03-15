import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import { errorHandler } from './middleware/error.middleware';
import routes from './routes';
import logger from './services/logger.service';
import { initSentry, sentryErrorHandler } from './services/error.service';
import { securityMiddleware } from './middleware/security.middleware';

dotenv.config();

const app = express();

// Initialize Sentry first
initSentry(app);

// Middleware chain
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
securityMiddleware.forEach(middleware => app.use(middleware));

// Routes
app.use('/api', routes);

// Error handling chain
app.use(sentryErrorHandler);
app.use(errorHandler as ErrorRequestHandler);

// Connect to database and start server
const startServer = async () => {
    try {
        await connectDB();
        
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    } catch (error) {
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();

export default app; 