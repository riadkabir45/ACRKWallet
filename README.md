# Arc Wallet

**An AI-powered expense tracker with voice input, social splitting, and intelligent budget management.**

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Requirements & Timeline](#requirements--timeline)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Team](#team)
- [Contributing](#contributing)

## Overview

Arc Wallet helps users manage their finances effortlessly through intelligent expense tracking, social cost splitting, and real-time budget insights.

### Target Users

- **Students** - Budget-conscious individuals tracking daily spending
- **Young Professionals** - Early-career professionals building financial habits
- **Social Groups** - Friends who regularly split expenses

### Problems Solved

1. **Expense tracking friction** - Voice input enables frictionless logging (vs. traditional manual entry)
2. **Shared expenses complexity** - Streamlined expense claims and settlement tracking
3. **Budget unawareness** - Intelligent notifications and analytics promote spending awareness

## Features

### Key Capabilities

- 🎤 Voice-powered expense logging with AI interpretation
- 👥 Social expense splitting and loan claim management
- 📊 Monthly spending analytics by category
- 🔔 Smart push notifications for budget alerts
- 🔐 Secure authentication with OTP verification

### Feature Roadmap (MoSCoW)

#### 🔴 MUST HAVE (MVP - Phase 1)

##### User Authentication

- [ ] User registration with email
- [ ] User login with email and password
- [ ] Email verification using OTP
- [ ] Password reset functionality
- [ ] Secure session management

##### Expense Tracking

- [ ] Create expense entry with amount, category/tag, and date
- [ ] View all personal expenses
- [ ] Edit existing expense entries
- [ ] Delete expense entries
- [ ] Default date field to today's date
- [ ] Multiple category/tag support

##### Acceptance Criteria

- Users can create, read, update, delete (CRUD) expenses within 5 seconds
- All expenses are securely stored per user account
- Invalid data is rejected with clear error messages

#### 🟡 SHOULD HAVE (Phase 2)

##### Enhanced Expense Tracking

- [ ] Monthly expense summary with graphs
- [ ] Expense breakdown by category/tags
- [ ] Monthly spending limit setting
- [ ] Budget alerts via push notifications
- [ ] Timely reminders to log expenses
- [ ] Voice input for expense logging (uses AI/LLM to extract amount, category, date)

##### Notifications

- [ ] Send monthly expense summary report
- [ ] Send budget warning when approaching/exceeding limit
- [ ] Send reminders to log expenses (configurable frequency)

**Acceptance Criteria:**

- Voice input correctly interprets 90%+ of common expense phrases
- Push notifications deliver within 2 seconds of trigger event
- Users can customize notification frequency and types

#### 🟢 COULD HAVE (Phase 3+)

##### Social Features - Connections

- [ ] Send connection requests to other users
- [ ] Accept/reject connection requests
- [ ] View list of connected users
- [ ] Unblock/disconnect from users

##### Social Features - Expense Splitting

- [ ] Create expense claims (user borrowed money OR item split with percentage)
- [ ] Send claims to connected users
- [ ] Receive claim notifications
- [ ] Accept/reject claims
- [ ] Track settled vs pending claims
- [ ] View settlement history

##### Analytics

- [ ] Year-to-date spending trends
- [ ] Comparison of spending by month
- [ ] AI-powered spending insights (e.g., "You spent 40% more on dining this month")

#### ⚪ WON'T HAVE (Out of Scope)

- Face/camera-based expense logging
- Physical receipt scanning/OCR
- Bank account integration
- Investment or credit score features
- Multi-currency support (v1)
- Real-time expense sync across devices
- Automatic recurring expense categorization

## Quick Start

### Prerequisites

- Node.js v18+
- NPM v9+
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

## Requirements & Timeline

### Non-Functional Requirements

| Aspect          | Requirement                                                 |
| --------------- | ----------------------------------------------------------- |
| **Performance** | Page load < 2 seconds, API response < 500ms                 |
| **Security**    | JWT authentication, password hashing (bcrypt), HTTPS only   |
| **Reliability** | 99% uptime, automated error logging                         |
| **Scalability** | Support 10,000+ users without performance degradation       |
| **Usability**   | Mobile-responsive, intuitive UI, <3 clicks for common tasks |

### Constraints & Assumptions

**Constraints:**

- Initial release for web only (mobile later)
- Limited to 2 developers
- 3-month timeline
- Budget: $0 (free tier services)

**Assumptions:**

- Users have valid email addresses
- Push notifications available (web standard)
- Voice API available (can use browser Web Speech API)
- MongoDB available for free tier (Atlas)

### Timeline

| Phase                    | Duration | Focus                                       |
| ------------------------ | -------- | ------------------------------------------- |
| **Phase 1**              | 2 weeks  | Core authentication + expense CRUD          |
| **Phase 2**              | 3 weeks  | Voice input, notifications, monthly reports |
| **Phase 3**              | 2 weeks  | Social features (connections, claims)       |
| **Testing & Refinement** | 1 week   | QA, bug fixes, performance optimization     |

### Success Metrics

- [ ] Users can complete expense logging in <10 seconds
- [ ] 95%+ of voice inputs interpreted correctly
- [ ] Users create at least 3 expenses in first week
- [ ] Monthly active users grow 20% month-over-month
- [ ] Zero security incidents

### External Services

- **Email Service**: For OTP and password reset (SendGrid/AWS SES)
- **Voice Recognition**: Web Speech API or OpenAI Whisper
- **Push Notifications**: Firebase Cloud Messaging or browser Push API
- **Database**: MongoDB Atlas (free tier)

## Tech Stack

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

## Project Structure

```ascii
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

## Architechture

### API Structure

#### 🚀 `POST /api/signup`

##### Parameters (Sign Up)

> | name              |  type     | data type      | description                         |
> |--|--|--|--|
> | `email` |  required | string  | Email the user has access to |
> | `username` |  required | string  | Unique username for the account |
> | `password` |  required | string  | condition matched password |

##### Responses (Sign Up)

> | http code     | content-type                      | response                                                            |
> |--|--|--|
> | `200` | `application/json` | `{"success": true,"msg": "User created successfully", code: 200}` |
> | `200` | `application/json` | `{"success": false,"msg": "Duplicate username"}, code: 301` |
> | `200` | `application/json` | `{"success": false,"msg": "Email already used by another account", code: 302}` |
> | `400` | `application/json` | `{"code":"400","message":"Bad Request"}` |

#### 🚀 `GET /api/signin`

##### Parameters (Sign In)

> | name              |  type     | data type      | description                         |
> |--|--|--|--|
> | `username` |  required | string  | Username of the account |
> | `password` |  required | string  | User account password |

##### Responses (Sign In)

> | http code     | content-type                      | response                                                            |
> |--|--|--|
> | `200` | `application/json` | `{"success": true,"msg": "Login Successful", code: 201}` |
> | `200` | `application/json` | `{"success": false,"msg": "Invalid credintials"}, code: 303` |
> | `400` | `application/json` | `{"code":"400","message":"Bad Request"}` |

## Team

This project is developed by:

- [Aritra Chakraborty](https://github.com/aritraChakraborty101)
- [Md. Mokaddimul kabir](https://github.com/riadkabir45)

## Contributing

We follow professional development practices:

- **Git workflow**: Feature branches with pull requests
- **Code standards**: TypeScript with ESLint
- **Commits**: Conventional commits format
- **Reviews**: Peer code review required

## License

This project is private and proprietary.
