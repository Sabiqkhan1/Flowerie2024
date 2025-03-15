import request from 'supertest';
import app from '../app';
import User from '../models/User';
import { createTestUser } from './helpers/auth.helper';

describe('Auth API', () => {
    describe('POST /api/auth/register', () => {
        it('should register a new user', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    email: 'new@example.com',
                    password: 'password123',
                    firstName: 'New',
                    lastName: 'User'
                });

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('token');
            expect(response.body.user).toHaveProperty('email', 'new@example.com');
        });
    });

    describe('POST /api/auth/login', () => {
        it('should login existing user', async () => {
            const { user } = await createTestUser();

            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: user.email,
                    password: 'password123'
                });

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('token');
        });
    });
}); 