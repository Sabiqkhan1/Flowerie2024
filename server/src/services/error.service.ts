import * as Sentry from '@sentry/node';
import { Application, ErrorRequestHandler } from 'express';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import logger from './logger.service';

export const initSentry = (app: Application): void => {
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        integrations: [nodeProfilingIntegration()],
        tracesSampleRate: 1.0
    });
};

export const sentryErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
    Sentry.captureException(error);
    next(error);
}; 