import { Router } from 'express';
import { auth } from '../middleware/auth.middleware';
import multer from 'multer';
import { createService, updateService, getVendorServices } from '../controllers/vendors/serviceController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }
});

router.post('/', auth, upload.array('images', 5), asyncHandler(createService));
router.patch('/:id', auth, upload.array('images', 5), asyncHandler(updateService));
router.get('/vendor', auth, asyncHandler(getVendorServices));

export default router; 