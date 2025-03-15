import client from 'prom-client';
import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';

const register = new client.Registry();

client.collectDefaultMetrics({ register });

export const metrics = {
    httpRequestDuration: new client.Histogram({
        name: 'http_request_duration_seconds',
        help: 'Duration of HTTP requests in seconds',
        labelNames: ['method', 'route', 'status_code']
    })
};

register.registerMetric(metrics.httpRequestDuration);

export const metricsMiddleware = asyncHandler(async (_req: Request, res: Response) => {
    const data = await register.metrics();
    res.set('Content-Type', register.contentType);
    return res.send(data);
}); 