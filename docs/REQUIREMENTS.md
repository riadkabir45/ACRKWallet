# Requirements & Features

## Project Vision

**Arc Wallet** is an AI-powered expense tracking application that enables users to easily manage and categorize their spending while enabling shared expense management with friends.

---

## Target Users

- **Students** - Budget-conscious, need to track spending
- **Young Professionals** - Early career, building financial habits
- **Social Groups** - Friends who share expenses regularly

---

## Core Problems Solved

1. **Friction in expense tracking** - Most users abandon expense apps; Arc Wallet uses voice input for frictionless logging
2. **Shared expenses complexity** - Splitting bills with friends is tedious; Arc Wallet streamlines claims and settlements
3. **Budget awareness** - Users spend without realizing; Arc Wallet provides intelligent notifications and analytics

---

## Features Breakdown (MoSCoW)

### 🔴 MUST HAVE (MVP - Phase 1)

#### User Authentication
- [ ] User registration with email
- [ ] User login with email and password
- [ ] Email verification using OTP
- [ ] Password reset functionality
- [ ] Secure session management

#### Expense Tracking
- [ ] Create expense entry with amount, category/tag, and date
- [ ] View all personal expenses
- [ ] Edit existing expense entries
- [ ] Delete expense entries
- [ ] Default date field to today's date
- [ ] Multiple category/tag support

**Acceptance Criteria:**
- Users can create, read, update, delete (CRUD) expenses within 5 seconds
- All expenses are securely stored per user account
- Invalid data is rejected with clear error messages

---

### 🟡 SHOULD HAVE (Phase 2)

#### Enhanced Expense Tracking
- [ ] Monthly expense summary with graphs
- [ ] Expense breakdown by category/tags
- [ ] Monthly spending limit setting
- [ ] Budget alerts via push notifications
- [ ] Timely reminders to log expenses
- [ ] Voice input for expense logging
  - Uses AI/LLM to interpret voice and extract: amount, category, date

#### Notifications
- [ ] Send monthly expense summary report
- [ ] Send budget warning when approaching/exceeding limit
- [ ] Send reminders to log expenses (configurable frequency)

**Acceptance Criteria:**
- Voice input correctly interprets 90%+ of common expense phrases
- Push notifications deliver within 2 seconds of trigger event
- Users can customize notification frequency and types

---

### 🟢 COULD HAVE (Phase 3+)

#### Social Features - Connections
- [ ] Send connection requests to other users
- [ ] Accept/reject connection requests
- [ ] View list of connected users
- [ ] Unblock/disconnect from users

#### Social Features - Expense Splitting
- [ ] Create expense claims (user borrowed money OR item split with percentage)
- [ ] Send claims to connected users
- [ ] Receive claim notifications
- [ ] Accept/reject claims
- [ ] Track settled vs pending claims
- [ ] View settlement history

#### Analytics
- [ ] Year-to-date spending trends
- [ ] Comparison of spending by month
- [ ] AI-powered spending insights (e.g., "You spent 40% more on dining this month")

---

### ⚪ WON'T HAVE (Out of Scope)

- Face/camera-based expense logging
- Physical receipt scanning/OCR
- Bank account integration
- Investment or credit score features
- Multi-currency support (v1)
- Real-time expense sync across devices
- Automatic recurring expense categorization

---

## Non-Functional Requirements

| Aspect | Requirement |
|--------|------------|
| **Performance** | Page load < 2 seconds, API response < 500ms |
| **Security** | JWT authentication, password hashing (bcrypt), HTTPS only |
| **Reliability** | 99% uptime, automated error logging |
| **Scalability** | Support 10,000+ users without performance degradation |
| **Usability** | Mobile-responsive, intuitive UI, <3 clicks for common tasks |

---

## Constraints & Assumptions

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

---

## Success Metrics

- [ ] Users can complete expense logging in <10 seconds
- [ ] 95%+ of voice inputs interpreted correctly
- [ ] Users create at least 3 expenses in first week
- [ ] Monthly active users grow 20% month-over-month
- [ ] Zero security incidents

---

## Timeline

| Phase | Duration | Focus |
|-------|----------|-------|
| **Phase 1** | 2 weeks | Core authentication + expense CRUD |
| **Phase 2** | 3 weeks | Voice input, notifications, monthly reports |
| **Phase 3** | 2 weeks | Social features (connections, claims) |
| **Testing & Refinement** | 1 week | QA, bug fixes, performance optimization |

---

## Data Dependencies

### External Services
- **Email Service**: For OTP and password reset (SendGrid/AWS SES)
- **Voice Recognition**: Web Speech API or OpenAI Whisper
- **Push Notifications**: Firebase Cloud Messaging or browser Push API
- **Database**: MongoDB Atlas (free tier)

---

## Open Questions / To Be Decided

- [ ] Will we support multiple currencies initially?
- [ ] What's the maximum expense per entry?
- [ ] Should users be able to set recurring expenses?
- [ ] Will there be spending categories preset or user-defined?
- [ ] Maximum number of connections per user?