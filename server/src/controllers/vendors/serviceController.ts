import { Request, Response } from 'express';
import Service from '../../models/Service';
import { uploadImage } from '../../services/storage.service';

export const createService = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            name,
            description,
            category,
            basePrice,
            features,
            customization,
            availability
        } = req.body;

        let images: string[] = [];
        if (req.files && Array.isArray(req.files)) {
            images = await Promise.all(
                req.files.map(file => uploadImage(file, 'services'))
            );
        }

        const service = new Service({
            vendor: req.userId,
            name,
            description,
            category,
            basePrice,
            images,
            features,
            customization,
            availability
        });

        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const updateService = async (req: Request, res: Response) => {
    try {
        const serviceId = req.params.id;
        const updates = req.body;
        
        const service = await Service.findOne({
            _id: serviceId,
            vendor: req.userId
        });

        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }

        if (req.files && Array.isArray(req.files) && req.files.length > 0) {
            const newImages = await Promise.all(
                req.files.map(file => uploadImage(file, 'services'))
            );
            updates.images = [...(service.images || []), ...newImages];
        }

        Object.assign(service, updates);
        await service.save();

        res.json(service);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getVendorServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.find({ vendor: req.userId });
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}; 