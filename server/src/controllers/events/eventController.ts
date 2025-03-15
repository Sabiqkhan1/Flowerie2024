import { Request, Response } from 'express';
import Event from '../../models/Event';
import Vendor from '../../models/Vendor';

export const createEvent = async (req: Request, res: Response) => {
    try {
        const { title, type, date, budget, location, guests } = req.body;

        const event = new Event({
            title,
            type,
            date,
            budget,
            location,
            guests,
            owner: req.userId
        });

        await event.save();

        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getEvent = async (req: Request, res: Response) => {
    try {
        const event = await Event.findOne({
            _id: req.params.id,
            owner: req.userId
        })
        .populate('vendors.vendor')
        .populate('vendors.service');

        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.json(event);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const addVendorToEvent = async (req: Request, res: Response) => {
    try {
        const { vendorId, serviceId } = req.body;
        const eventId = req.params.id;

        const [event, vendor] = await Promise.all([
            Event.findOne({ _id: eventId, owner: req.userId }),
            Vendor.findById(vendorId)
        ]);

        if (!event || !vendor) {
            return res.status(404).json({ error: 'Event or vendor not found' });
        }

        event.vendors.push({
            vendor: vendorId,
            service: serviceId,
            status: 'pending',
            price: 0 // To be updated after vendor confirmation
        });

        await event.save();

        res.json(event);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}; 