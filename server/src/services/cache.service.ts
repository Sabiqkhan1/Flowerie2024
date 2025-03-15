import Redis from 'ioredis';
import logger from './logger.service';

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379'),
    password: process.env.REDIS_PASSWORD
});

redis.on('error', (error) => {
    logger.error('Redis connection error:', error);
});

export const cacheGet = async (key: string): Promise<string | null> => {
    try {
        return await redis.get(key);
    } catch (error) {
        logger.error('Redis get error:', error);
        return null;
    }
};

export const cacheSet = async (
    key: string,
    value: string,
    expirySeconds?: number
): Promise<void> => {
    try {
        if (expirySeconds) {
            await redis.setex(key, expirySeconds, value);
        } else {
            await redis.set(key, value);
        }
    } catch (error) {
        logger.error('Redis set error:', error);
    }
}; 