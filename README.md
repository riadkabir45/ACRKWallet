# Arck Wallet

**An AI-powered expense tracker with voice input, loan management, and real-time notifications.**

## 🎯 Quick Overview

Arc Wallet helps you manage your finances effortlessly. Track expenses with voice commands, split costs with friends, manage loans, and stay within budget with intelligent push notifications.

**Key Features:**
- 🎤 Voice-powered expense logging
- 👥 Social expense splitting and loan claims
- 📊 Monthly spending analytics by category
- 🔔 Smart push notifications for budget alerts
- 🔐 Secure user authentication with OTP verification

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ and npm v9+
- Git v2.30+

### Installation

```bash
# Clone repository
git clone <repository-url>
cd ACRKWallet

# Install dependencies
cd client && npm install
cd ../server && npm install

# Start development servers
# Terminal 1
cd client && npm run dev

# Terminal 2
cd server && npm run dev
```


**[Detailed Setup Guide →](./docs/SETUP_GUIDE.md)**

---

## 📚 Documentation

For comprehensive information, see our documentation:

| Document | Purpose |
|----------|---------|
| [Requirements & Features](./docs/REQUIREMENTS.md) | Detailed feature specifications using MoSCoW framework |
| [Architecture](./docs/ARCHITECTURE.md) | System design and technology decisions |
| [API Documentation](./docs/API_DOCUMENTATION.md) | Backend endpoints and schemas |
| [Database Schema](./docs/DATABASE_SCHEMA.md) | Data models and relationships |
| [Setup Guide](./docs/SETUP_GUIDE.md) | Installation and local development |
| [Contributing Guidelines](./CONTRIBUTING.md) | How to contribute to the project |
| [Development Standards](./docs/DEVELOPMENT_STANDARDS.md) | Code conventions and best practices |

---

## 🛠️ Tech Stack

### Frontend
- **React** 19 - UI framework
- **TypeScript** 5.9 - Type safety
- **Vite** 7.2 - Build tool and dev server
- **ESLint** - Code quality

### Backend
- **Node.js** - JavaScript runtime
- **Express** 5.2 - Web framework
- **MongoDB** - Database (recommended)
- **Nodemon** - Development auto-reload

---

## 📁 Project Structure

```
ACRKWallet/
├── client/                  # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── services/       # API integration
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # TypeScript definitions
│   │   └── App.tsx         # Root component
│   ├── package.json
│   └── vite.config.ts
│
├── server/                  # Express Backend
│   ├── controllers/        # Request handlers
│   ├── models/             # Data models
│   ├── routes/             # API endpoints
│   ├── middleware/         # Express middleware
│   ├── services/           # Business logic
│   ├── utils/              # Helper functions
│   ├── server.js           # Entry point
│   └── package.json
│
├── docs/                    # Documentation
├── README.md                # This file
└── CONTRIBUTING.md          # Contribution guidelines
```

---

## 🎯 Project Status

**Phase 1:** Core expense tracking ✅ In Progress
- User authentication
- Basic expense logging
- Voice input integration

**Phase 2:** Social features 🔄 Planned
- User connections
- Loan claims and splitting
- Acceptance/rejection workflow

**Phase 3:** Analytics & Optimization 📅 Planned
- Monthly spending reports
- Budget alerts and limits
- AI-powered spending insights

---

## 👥 Team

This project is developed by 2 developers committed to building a high-quality financial application.

---

## 🤝 Contributing

We follow professional development practices:
- **Git workflow**: Feature branches with pull requests
- **Code standards**: TypeScript with ESLint
- **Commits**: Conventional commits format
- **Reviews**: Peer code review required

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## 📋 Getting Help

1. Check the [Troubleshooting Guide](./docs/TROUBLESHOOTING.md)
2. Review relevant documentation in `/docs`
3. Ask your teammate
4. Search existing issues

---

## 📄 License

This project is private and proprietary.

---

**Ready to get started?** [Start here →](./docs/SETUP_GUIDE.md)