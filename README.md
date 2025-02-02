# RetroRooms - Agile Retrospective Made Simple

## Overview

RetroRooms is an open-source web application designed to streamline the agile retrospective process. The goal is to provide a simple, fast, and seamless experience for teams to reflect on their work, identify actionable items, and prioritize them efficiently.

Unlike other solutions that often require sign-ups, logins, and unnecessary complexity, RetroRooms focused on ease of use and speed, ensuring teams can create and participate in retrospectives without any friction.

## Key Features

- **Instant Room Creation**: Create and join retrospective rooms with unique names without the need for sign-ups.
- **Template-Based Retrospectives**: Choose from various templates like DAKI (Dedication, Abandon, Keep, Improve) to structure your retrospective.
- **Time-Based Sessions**: Add cards to sections of the template during a timer, followed by a reveal to all participants.
- **Prioritization and Actions**: After the retrospective, vote on actionable items to prioritize what's most important.
- **Downloadable Summaries**: Owners receive downloadable summaries of the retrospective for future reference.

## Technologies Used

- **Backend**: Node.js with Express.js, built using TypeScript following a hexagonal architecture.
- **Frontend**: React with TypeScript, also adhering to a hexagonal structure where applicable.
- **Websockets**: Employed for real-time communication between clients and the server.

## Prerequisites

Before contributing to RetroRooms, ensure you have the following installed:

- Node.js current LTS version (22.12.0)
- pnpm (install it using `npm install -g pnpm`)
- Git

Also, we highly recommend using **nvm** to manage Node.js versions.

## Installation Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/noel-lopez/retro-rooms
   cd retro-rooms
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Developing:
   - Run backend in development mode:
     ```bash
     pnpm run dev:server
     ```
   - Run frontend in development mode:
     ```bash
     pnpm run dev:client
     ```
   - Run documentation in development mode:
     ```bash
     pnpm run dev:docs
     ```

When installing dependencies with `pnpm install`, the `prepare` script defined in `package.json` will run automatically, and will install pre-commit hooks for linting and formatting via husky. This will ensure that all code contributions are linted and formatted correctly.

## Our Practices

- **Prettier** and **ESLint** to ensure consistent code style and good practices following the predefined rules.
- All code contributions should pass linting and unit tests.
- We follow the **Conventional Commits** specification for commit messages.
- **GitHub Actions** for continuous integration and deployment.
- **GitHub Projects** to manage tasks and issues.
