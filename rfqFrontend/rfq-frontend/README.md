# RFQ Widget Processing Frontend

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

### Examples RFQ's Emails Content

These are examples of RFQ's emails content generated with OpenAI for testing purposes.

### Example 1

```text
Dear Sales Department,

We need stainless steel plates for an upcoming project. Please send us a quote for the following items:

1. Stainless Steel Plate, Grade 304, 5mm thick, 1200mm x 2400mm - 25 plates
2. Stainless Steel Plate, Grade 316, 8mm thick, 1500mm x 3000mm - 10 plates

Include any applicable discounts for bulk orders and the estimated shipping cost.

Looking forward to your response.

Best regards,
David Wilson
Head of Procurement
OPQ Manufacturing
david.wilson@opqmanufacturing.com
```

### Example 2

```text
Hi Team,

Can you provide a quote for the following brass rods:

1. Brass Rod, 1/2 inch diameter, 6 feet length - 20 rods
2. Brass Rod, 3/4 inch diameter, 6 feet length - 15 rods

We would appreciate it if you could include the lead time and shipping details in your quote.

Thanks and regards,
Emma Johnson
Operations Manager
LMN Industries
emma.johnson@lmnindustries.com
```

### Example 3

```text
Dear Sir/Madam,

We are interested in purchasing copper wire and would like to request a quote for the following:

1. Copper Wire, 10 AWG, stranded, 500 meters
2. Copper Wire, 12 AWG, solid, 300 meters

Please provide the pricing, availability, and estimated delivery time for these items.

Best regards,
Michael Brown
Supply Chain Coordinator
123 Electronics
michael.brown@123electronics.com
```

### Example 4

```text
Hello,

We are looking to purchase steel pipes for a construction project. Could you kindly provide us with a quote for the following specifications:

1. Steel Pipe, 2-inch diameter, Schedule 40 - 200 meters
2. Steel Pipe, 4-inch diameter, Schedule 80 - 150 meters

Additionally, please include any details on bulk pricing and delivery options.

Thank you.

Sincerely,
Jane Smith
Procurement Specialist
ABC Construction
jane.smith@abcconstruction.com
```

### Example 5

```text
Dear Sales Team,

I hope this email finds you well. We are in need of aluminum sheets for our upcoming project. Could you please provide a quote for the following items:

1. Aluminum Sheet, 2mm thick, 1000mm x 2000mm - 50 sheets
2. Aluminum Sheet, 3mm thick, 1500mm x 3000mm - 30 sheets

Please also let us know the estimated delivery time and any applicable shipping costs.

Thank you for your prompt attention to this request.

Best regards,
John Doe
Purchasing Manager
XYZ Manufacturing
john.doe@xyzmanufacturing.com
```
