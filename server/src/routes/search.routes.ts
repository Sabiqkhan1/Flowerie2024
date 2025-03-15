import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { searchVendors } from '../controllers/search/searchController';
import { cacheMiddleware } from '../middleware/cache.middleware';

const router = Router();

router.get('/vendors', 
    cacheMiddleware({
        duration: 1800,
        key: (req) => `search:vendors:${JSON.stringify(req.query)}`
    }),
    asyncHandler(searchVendors)
);

export default router; 