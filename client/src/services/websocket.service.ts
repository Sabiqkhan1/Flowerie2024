import { io, Socket } from 'socket.io-client';

class WebSocketService {
    private socket: Socket | null = null;

    connect(token: string) {
        this.socket = io(process.env.REACT_APP_WS_URL!, {
            auth: { token }
        });

        this.socket.on('connect', () => {
            console.log('Connected to WebSocket');
        });

        this.socket.on('booking:updated', (data) => {
            // Handle booking updates
            console.log('Booking updated:', data);
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from WebSocket');
        });
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    subscribeToBookingUpdates(callback: (data: any) => void) {
        if (this.socket) {
            this.socket.on('booking:updated', callback);
        }
    }

    unsubscribeFromBookingUpdates(callback: (data: any) => void) {
        if (this.socket) {
            this.socket.off('booking:updated', callback);
        }
    }
}

export const wsService = new WebSocketService(); 