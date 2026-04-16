# Social Media Project (Part Two) | Assignment 13

> **Assignment 13**  
> _Author: Mohamed Mahmoud Abo Al Magd_  
> _Group: Node_C45_Mon&Thurs_9:00pm (Online)_

## Overview

This project is a modular, production-ready backend API for a social media platform. It focuses on robust authentication, secure user account management, and supports seamless integration with both system and Google-based authentication flows. Built with TypeScript and Node.js, it employs Express, MongoDB, Mongoose, and Redis with modern security and cloud-friendly patterns.

## Features

- **User Authentication**
  - Email/password and Google OAuth2 support.
  - Email confirmation (with OTP code flow), resend confirmation, and validation pipeline.
  - Signup and login (system or Google).
- **User Management**
  - Secure user profile retrieval.
  - Logout with multi-device/session support (invalidate all tokens or just current).
  - Token rotation endpoint (refresh tokens securely).
- **Session Security**
  - JWT-based stateless authentication.
  - Credential revocation and rotation using Redis.
  - Encrypted sensitive user data (ex: phone numbers).
- **Email Verification**
  - OTP generation, rate limiting and lockout, and email delivery (via event-based dispatch).
- **Modular/MVC Structure**
  - Organized by feature (auth, user, shared middleware, common services).
  - Clean separation between controllers, services, validation, and data repositories.
- **Production Ready**
  - Environment-based configuration (`.env.production`, `.env.development`).
  - Strict TypeScript compilation, robust error handling, and code linting.

## Tech Stack

- **TypeScript / Node.js** – Application language and runtime.
- **Express v5** – Web server and routing.
- **MongoDB & Mongoose** – Data storage and data modeling.
- **Redis** – Caching, OTP/session management, and token revocation.
- **JWT (jsonwebtoken)** – Authentication tokens.
- **bcrypt** – Password hashing.
- **nodemailer** – Transactional email delivery.
- **Google Auth Library** – OAuth2 integrations.
- **zod** – Request data validation.
- **cross-env & concurrently** – Environment and workflow automation.
- **dotenv** – Environment variable loading.
- **Other**: Type-safety with `@types/*`, modern ES2023 targeting.

## Key Endpoints

### Auth
- `POST /auth/login` – Login with email and password.
- `POST /auth/login/gmail` – Login with Google OAuth2 ID token.
- `POST /auth/signup` – Register using email, username, password, phone.
- `POST /auth/signup/gmail` – Register using Google account.
- `PATCH /auth/confirm-email` – Confirm email with OTP.
- `PATCH /auth/resend-confirm-email` – Request OTP resend.

### User
- `GET /user/` – Retrieve authenticated user profile.
- `POST /user/logout` – Logout user (revoke tokens with multi-device support).
- `POST /user/rotate-token` – Rotate (refresh) authentication token.

## Project Architecture

- `src/`
  - `modules/auth/` & `modules/user/`: Feature modules with controllers, services, DTOs.
  - `middleware/`: Global error handler, authentication, authorization.
  - `common/`: Shared enums, services (Redis, Token, Email), utilities, interfaces.
  - `DB/`: MongoDB connection and user repository.
  - `config/`: Environment variables and app configuration.
  - `main.ts` & `app.bootstrap.ts`: Entrypoints and server bootstrap logic.
- `dist/`: Compiled JavaScript output (not committed).

## Getting Started

1. **Clone the repository**:
   ```sh
   git clone https://github.com/abo-al-magd-404/assignment-13.git
   cd assignment-13
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Setup Environment**:
   - Copy `.env.development` or `.env.production` and adapt values for MongoDB, Redis, JWT, email credentials, and Google OAuth client IDs.

4. **Run Development Mode**:
   ```sh
   npm run start:dev
   ```

5. **Production Build**:
   ```sh
   npm run start:prod
   ```

## Conventions and Security

- All sensitive secrets/config are managed via environment files.
- Follows strict TypeScript checks and robust, centralized error reporting.
- Passwords, OTPs, and tokens are encrypted/hashed with best-practice strategies.

## Author & Assignment Info

- **Assignment:** Social Media Project (Part two) | ASSIGNMENT 13
- **Name:** Mohamed Mahmoud Abo Al Magd
- **Group:** Node_C45_Mon&Thurs_9:00pm (Online)

## License

ISC. See [`package.json`](./package.json) for full details.
