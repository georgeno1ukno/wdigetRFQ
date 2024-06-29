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

# 💫 About Me:

I'm a FullStack Developer, cloud technologies lover.

## 🌐 Socials:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/jorge-r-godinez)

# 💻 Tech Stack:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

---

[![](https://visitcount.itsvg.in/api?id=georgeno1ukno&icon=0&color=0)](https://visitcount.itsvg.in)

<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
