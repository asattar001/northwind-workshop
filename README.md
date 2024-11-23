# NorthWind Workshop 

A web application that allows users to search the food products that Northwind Grocery sells.

## Features

- Search products by selecting different categories
- View all food products in Northwind Grocery
- Get more details on a selected product
- Data fetched from a local backend server

## Prerequisites

Before running this project, make sure you have:
- A modern web browser
- Node.js installed (for running the backend server)

## Setup Instructions

### 1. Backend Setup (Required)

First, you need to set up the backend server as the application depends on it to function:

1. Clone the backend repository:
bash
git clone https://github.com/DevelopIntelligenceBoulder/northwind-workshop-express-server.git


2. Navigate to the server directory:
bash
cd northwind-workshop-express-server


3. Install server dependencies:
bash
npm install


4. Start the backend server:
bash
npm start


The backend server will run on http://localhost:8081. Verify it's working by accessing http://localhost:8081/api/categories in your browser.

### 2. Frontend Setup

After the backend is running, set up the frontend:

1. Clone the repository:
bash
git clone https://github.com/asattar001/northwind-workshop.git


2. Navigate to the project directory:
bash
cd northwind-workshop


3. Open the index.html file in your web browser, or serve it using a local development server of your choice (like Live Server in VS Code)

## API Endpoints Used

- GET /api/categories - Fetch all categories
- GET /api/categories/:id - Fetch a specific category
- GET /api/products - Fetch all products
- GET /api/products/:id - Fetch a specific product

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js (backend)

## Project Structure

├── index.html
├── productSearch.html
├── productDetails.html
├── css/
│   └── styles.css
└── scripts/
    ├── productSearch.js
    ├── productDetails.js
    └── api.js
