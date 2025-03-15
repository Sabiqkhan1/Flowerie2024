import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import jwt from 'jsonwebtoken';
import logger from './logger.service';

export class WebSocketService {
    private io: Server;

    constructor(server: HttpServer) {
        this.io = new Server(server, {
            cors: {
                origin: process.env.CLIENT_URL,
                methods: ['GET', 'POST']
            }
        });

        this.io.use(async (socket, next) => {
            try {
                const token = socket.handshake.auth.token;
                if (!token) {
                    throw new Error('Authentication error');
                }

                const decoded = jwt.verify(token, process.env.JWT_SECRET!);
                socket.data.user = decoded;
                next();
            } catch (error) {
                next(new Error('Authentication error'));
            }
        });

        this.setupEventHandlers();
    }

    private setupEventHandlers() {
        this.io.on('connection', (socket) => {
            logger.info(`Client connected: ${socket.id}`);

            // Join user-specific room
            const userId = socket.data.user.id;
            socket.join(`user:${userId}`);

            // Handle booking updates
            socket.on('booking:update', (data) => {
                this.handleBookingUpdate(data);
            });

            socket.on('disconnect', () => {
                logger.info(`Client disconnected: ${socket.id}`);
            });
        });
    }

    public async notifyBookingUpdate(userId: string, bookingData: any) {
        this.io.to(`user:${userId}`).emit('booking:updated', bookingData);
    }

    public async notifyVendorUpdate(vendorId: string, updateData: any) {
        this.io.to(`vendor:${vendorId}`).emit('vendor:updated', updateData);
    }

    private async handleBookingUpdate(data: any) {
        // Handle booking updates logic
        logger.info('Booking update received:', data);
    }
} 