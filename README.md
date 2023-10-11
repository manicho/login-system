# Login System

**Login System with Nest.js and Vite + React**

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Local Development](#local-development)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Description

This project is a comprehensive login system built with Nest.js, Vite + React, and various authentication methods, including two-factor authentication, Google OAuth authentication, and email registration. It uses a SQLite3 database by default but is configurable to work with other databases. The project is structured as a monorepo using TurboRepo, with the API running on port 8000 and the client on port 3000. The communication between the API and the client is configured with CORS for seamless interaction.

## Features

- Two-Factor Authentication
- Google OAuth Authentication
- Email Registration
- SQLite3 Database (configurable)
- Monorepo Structure (TurboRepo)
- TypeScript Throughout
- Seamless API-Client Communication (CORS)

## Requirements

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Basic knowledge of Nest.js, Vite + React, and TypeScript
- SQLite3 (or other supported database) for local development

## Installation

To get started with this project, follow these installation steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/manicho/login-system.git
   cd login-system
   ```

2. Install dependencies for both the API and the client:

```bash
npm install
```

## Usage

To use the project, follow these steps:

Configure the necessary environment variables (see Environment Variables).

Start the local development server:

```bash
npm run dev
```

Access the API at http://localhost:8000 and the client at http://localhost:3000.

## Configuration

The project can be configured using environment variables (see Environment Variables). Additionally, the following configuration options are available:

Database Configuration: You can configure the database connection in the API's ormconfig.js or equivalent file.

Authentication Methods: Customize authentication methods by modifying the authentication controllers and services.

## Local Development

For local development, you can use the following scripts:

npm run dev: Start both the API and the client for local development using TurboRepo.

npm run dev:api: Start only the API for local development.

npm run dev:client: Start only the client for local development.

## Environment Variables

To run this project, you need to set up environment variables. Create a .env file in both the client and api directories with the following content:

Client (.env in client directory)

```env
VITE_GOOGLE_OAUTH_CLIENT_ID=your-google-client-id
```

API (.env in api directory)

```env
PORT=8000
DATABASE_URL=sqlite:///path-to-your-sqlite-database.db
SECRET_KEY=your-secret-key
```

## Deployment

To deploy this project, follow your hosting provider's instructions for deploying a Nest.js API and a React application. Make sure to set the appropriate environment variables for production.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
