# RFQ Processing Frontend

## Overview

This project is a frontend application for processing Requests for Quotes (RFQs) using React and TypeScript. The application allows users to submit RFQ emails, view generated quotes, and finalize quotes for customers.

## Features

- Submit RFQ emails to be processed.
- View a list of generated quotes.
- Finalize quotes and send them to customers.

## Technologies Used

- React
- TypeScript
- Axios (for API requests)
- CSS for styling

## Prerequisites

- Node.js and npm installed.
- Backend server running.

## Directory Structure and Components

### 1. `src/` Directory

- **components/:** Contains the React components used in the application.

  - `QuoteDashboard.tsx:` Displays a list of quotes and allows finalizing them.
  - `RFQForm.tsx:` Allows submitting RFQs to be processed.

- **services/:** Contains the API service for interacting with the backend.

  - `api.ts:` Defines functions for submitting RFQ emails, retrieving quotes, and finalizing quotes.

- **styles/:** Contains CSS files for styling the application.

  - `App.css:` Basic styling for the application.

- **App.tsx:** Main application component that renders `RFQForm` and `QuoteDashboard` components.

- **index.tsx:** Entry point of the React application.

### 2. Configuration Files

- **public/:** Contains the public assets and the main `index.html` file.
- **package.json:** Lists the project dependencies and scripts.
- **tsconfig.json:** Configuration file for TypeScript, specifying compiler options.

### Usage

#### Submitting an RFQ

1. Enter the RFQ email content into the text area in the "Submit RFQ" section.
2. Click the "Submit RFQ" button.
3. The RFQ will be processed, and a new quote will be generated.

#### Viewing Quotes

1. Navigate to the "Quote Dashboard" section.
2. View the list of generated quotes with customer details and item information.
3. Click the "Finalize Quote" button to finalize a quote.

## Styling

- Basic CSS styles are applied for better UI/UX.
- Styles are located in the `src/styles` folder.

## Acknowledgements

- [Axios](https://github.com/axios/axios) for handling API requests.
- [Create React App](https://github.com/facebook/create-react-app) for setting up the React project.

## Getting Started for local enviroment

### 1. Clone the Repository

```bash
git clone https://github.com/georgeno1ukno/wdigetRFQ.git
cd rfqFrontend/rfq-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

The application will start on port 3000 by default.

```bash
npm start
```
