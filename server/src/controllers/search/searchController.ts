import { Request, Response } from 'express';
import Vendor from '../../models/Vendor';

export const searchVendors = async (req: Request, res: Response) => {
    try {
        const {
            category,
            location,
            date,
            budget,
            rating,
            page = 1,
            limit = 10
        } = req.query;

        const query: any = {};

        if (category) {
            query.category = { $in: category };
        }

        if (location) {
            query['location.city'] = location;
        }

        if (rating) {
            query.rating = { $gte: Number(rating) };
        }

        // Find vendors with availability on the specified date
        if (date) {
            query['availability.dates'] = {
                $elemMatch: {
                    $gte: new Date(date as string)
                }
            };
            query['availability.exceptions'] = {
                $not: {
                    $elemMatch: {
                        $eq: new Date(date as string)
                    }
                }
            };
        }

        const vendors = await Vendor.find(query)
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .select('-password');

        const total = await Vendor.countDocuments(query);

        res.json({
            vendors,
            total,
            pages: Math.ceil(total / Number(limit))
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}; 