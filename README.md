# Flowerie - Event Planning Platform

A comprehensive event planning platform that connects event organizers with venues and vendors.

## Features

- User Authentication
- Venue Search & Booking
- Vendor Management
- Event Planning Tools
- Real-time Updates
- Payment Integration

## Tech Stack

- Frontend: React, TypeScript, Redux Toolkit
- Backend: Node.js, Express, TypeScript
- Database: MongoDB
- Cache: Redis
- Storage: AWS S3
- Monitoring: Sentry
- Testing: Jest

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB
- Redis
- AWS Account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/flowerie.git
```

2. Install dependencies:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env` in both client and server directories
- Update the variables with your configuration

4. Start the development servers:
```bash
# Start server
cd server
npm run dev

# Start client
cd ../client
npm start
```

## Project Structure

```
flowerie/
├── client/              # React frontend
├── server/              # Node.js backend
├── docker-compose.yml   # Docker configuration
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
