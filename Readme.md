# RFQ Widget Processing Application

## Overview

This project is a full-stack application for processing Requests for Quotes (RFQs) for a metal service center. It leverages the latest AI tools to automatically convert customer RFQ emails into structured quotes, enabling salespeople simulate to respond with a single click. The application includes a backend server for handling RFQ processing and a frontend application for submitting RFQ emails, viewing quotes, and finalizing quotes.

This implementation doesn't have connection to DB for manage Inventory. It's using a dummy implementation for inventory stock and prices.

## Features

- **AI-Powered RFQ Extraction**: Uses OpenAI API to extract relevant data from RFQ emails.
- **Inventory Management**: Checks dummy inventory to determine product availability and pricing.
- **Quote Management**: Creates, manages, and finalizes quotes for customers.
- **User Interface**: Allows users to submit RFQ emails, view generated quotes, and finalize them.

## Technologies Used

- **Backend**:
  - Node.js
  - Express
  - TypeScript
  - Jest (for testing)
  - Supertest (for API testing)
  - OpenAI API
- **Frontend**:
  - React
  - TypeScript
  - Axios
  - CSS

## Getting Started

### Prerequisites

- Node.js and npm installed.
- OpenAI API key.

### 1. Clone the Repository

```bash
git clone https://github.com/georgeno1ukno/wdigetRFQ.git
cd wdigetRFQ
```

### 2. Setup Backend

Navigate to the rfqBackend directory and follow the instructions in the [backend README](https://github.com/georgeno1ukno/wdigetRFQ/blob/feature-rfq/rfqBackend/Readme.md) to set up and run the backend server.

### 3. Setup Frontend

Navigate to the rfqFrontend/rfq-frontend directory and follow the instructions in the [frontend README](https://github.com/georgeno1ukno/wdigetRFQ/blob/feature-rfq/rfqFrontend/rfq-frontend/README.md) to set up and run the frontend application.

### 3. RFQ's Email Content

Navigate to the [rfqFrontend/rfq-frontend](https://github.com/georgeno1ukno/wdigetRFQ/blob/feature-rfq/rfqFrontend/rfq-frontend/README.md) directory, section **Examples RFQ's Emails Content** to follow the instructions to set up and generate RFQ email content.
