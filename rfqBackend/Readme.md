# RFQ Processing Backend

## Overview

This challenge is a backend application for processing Requests for Quotes (RFQs) using Node.js, Express, and TypeScript. The application receives RFQ emails, extracts relevant information using OpenAI, checks dummy inventory, and generates structured quotes for customers.

## Features

- Extract RFQ data from email content using OpenAI API.
- Check dummy inventory for requested items.
- Generate and manage quotes.
- Finalize and simulate send quotes to customers.
- RESTful API endpoints for RFQ processing and quote management.

## Technologies Used

- Node.js
- Express
- TypeScript
- Jest (for testing)
- OpenAI API

## Prerequisites

- Node.js and npm installed.
- OpenAI API key.

## Project Structure and Architecture

### 1. `src/` Directory

- **controllers/:** Contains the application logic and routes for handling RFQ processing.

  - `rfqController.ts:` Handles requests related to RFQs and quotes, including extracting data from RFQ emails, checking inventory, creating quotes, and finalizing quotes.

- **models/:** Defines the data models used in the application.

  - `quote.ts:` Defines the `Quote` interface which includes customer information, item details, and quote status.

- **services/:** Contains the business logic and interaction with external APIs.

  - `openaiService.ts:` Interacts with the OpenAI API to extract RFQ data from emails.
  - `inventoryService.ts:` Checks the inventory and pricing for requested items.

- **routes/:** Defines the application routes and associates them with controller methods.

  - `rfqRoutes.ts:` Defines the routes for RFQ and quote management.

- **tests/:** Contains the test cases for the application.

  - `rfqController.test.ts:` Includes unit tests for the `rfqController`.

- **app.ts:** Initializes the Express application and sets up middleware.

- **server.ts:** Starts the Express server.

### 2. Configuration Files

- **.env:** Contains environment variables such as the OpenAI API key.
- **jest.config.js:** Configuration file for Jest, specifying the TypeScript preset and test environment.
- **package.json:** Lists the project dependencies and scripts.
- **tsconfig.json:** Configuration file for TypeScript, specifying compiler options.

## Getting Started for local enviroment

### 1. Clone the Repository

```bash
git clone https://github.com/georgeno1ukno/wdigetRFQ.git
cd rfqBackend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a .env file in the root of the project with the following content:

```bash
OPENAI_API_KEY=your_openai_api_key
```

### 4. Run the Backend Application

The server will start on port 3100 by default.

```bash
npx ts-node src/server.ts
```

## API Endpoints

### 1. Submit RFQ

- **URL:** `/api/rfq`
- **Method:** `POST`
- **Description:** Process an RFQ email and create a new quote.
- **Request Body:**

  ```json
  {
    "emailContent": "RFQ email content here"
  }
  ```

  - **Response**

  ```json
  {
    "id": "1",
    "customer": {
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    "items": [
      {
        "name": "Aluminum Sheet",
        "quantity": 50,
        "dimensions": "2mm thick, 1000mm x 2000mm",
        "price": 100
      },
      {
        "name": "Aluminum Sheet",
        "quantity": 30,
        "dimensions": "3mm thick, 1500mm x 3000mm",
        "price": 150
      }
    ],
    "totalPrice": 8500,
    "status": "draft",
    "createdAt": "2023-01-01T00:00:00.000Z"
  }
  ```

  ### 2. Get All Quotes

- **URL:** `/api/quotes`
- **Method:** `GET`
- **Description:** Retrieve all quotes.

  - **Response**

  ```json
  [
    {
      "id": "1",
      "customer": {
        "name": "John Doe",
        "email": "john.doe@example.com"
      },
      "items": [
        {
          "name": "Aluminum Sheet",
          "quantity": 50,
          "dimensions": "2mm thick, 1000mm x 2000mm",
          "price": 100
        },
        {
          "name": "Aluminum Sheet",
          "quantity": 30,
          "dimensions": "3mm thick, 1500mm x 3000mm",
          "price": 150
        }
      ],
      "totalPrice": 8500,
      "status": "draft",
      "createdAt": "2023-01-01T00:00:00.000Z"
    }
  ]
  ```

### 3. Finalize Quote

- **URL:** `/api/quotes/:id/finalize`
- **Method:** `POST`
- **Description:** Finalize a quote by ID.

  - **Response**

  ```json
  {
    "id": "1",
    "customer": {
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    "items": [
      {
        "name": "Aluminum Sheet",
        "quantity": 50,
        "dimensions": "2mm thick, 1000mm x 2000mm",
        "price": 100
      },
      {
        "name": "Aluminum Sheet",
        "quantity": 30,
        "dimensions": "3mm thick, 1500mm x 3000mm",
        "price": 150
      }
    ],
    "totalPrice": 8500,
    "status": "finalized",
    "createdAt": "2023-01-01T00:00:00.000Z"
  }
  ```

## Running Tests

### 1. Install Test Dependencies

Test dependencies should already be installed if you followed the installation steps. If not, run:

```bash
npm install
```

### 2. Run Tests

This will run the Jest test suite, which includes unit tests for the rfqController.

```bash
npm test
```
