/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         email:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         profileImage:
 *           type: string
 *         events:
 *           type: array
 *           items:
 *             type: string
 *         savedVendors:
 *           type: array
 *           items:
 *             type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 * 
 *     Event:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         type:
 *           type: string
 *           enum: [wedding, birthday, corporate, other]
 *         date:
 *           type: string
 *           format: date-time
 *         budget:
 *           type: number
 *         location:
 *           type: object
 *           properties:
 *             address:
 *               type: string
 *             city:
 *               type: string
 *             country:
 *               type: string
 *             coordinates:
 *               type: array
 *               items:
 *                 type: number
 */ 