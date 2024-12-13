Project Documentation: Payment System

Introduction
The Payment-System project is a web application designed to manage payments efficiently. This system allows users to enter payment data such as amount, reference, bank, mobile payment number and a screenshot of the payment receipt. The application is developed using React for the frontend, Node.js with Express for the backend and PostgreSQL as the database. The pgAdmin4 graphical interface is used for database configuration.

The index.html file serves as the entry point for the frontend application. It includes links to CSS styles, a Google font, and a script to load the React application. The body contains a div with the ID root, which is where the React components will be rendered.

The App.js file is a simple functional component that renders the PaymentForm component. This indicates that the payment form is likely where users will input their payment details.

Technical Documentation for Payment System Project
Project Overview
The Payment System is a full-stack application that allows users to submit payment information along with proof of payment. The application consists of a backend built with Node.js and Express, and a frontend developed using React.

Project Structure
payment-system/
│
├── backend/
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── payment.js
│   ├── uploads/
│   └── ...
│
└── frontend/
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        └── components/
            └── PaymentForm.js

Backend
server.js: The main entry point for the backend application. It sets up an Express server, configures middleware for CORS and JSON parsing, and defines an endpoint for processing payments.

config/database.js: Configures the Sequelize ORM to connect to a PostgreSQL database using the connection string stored in the environment variable PG_URI.

models/payment.js: Defines the Payment model with fields for amount, reference, bank, mobileNumber, and paymentProof. It synchronizes the model with the database.

uploads/: Directory for storing uploaded payment proof files.

Frontend
public/index.html: The entry point for the React application. It includes links to styles and scripts necessary for rendering the application.

src/App.js: The main React component that renders the PaymentForm component.

src/components/PaymentForm.js: A form component that allows users to input payment details. It uses react-hook-form for form handling and validation with yup. The form submits data to the backend API endpoint /api/payments.

API Endpoints

POST /api/payments: Receives payment information and proof of payment. The request body should include:
amount: The payment amount (required).
reference: A reference string for the payment (required).
bank: The name of the bank (required).
mobileNumber: The mobile number associated with the payment (required).
paymentProof: The file upload for proof of payment (required).

Prerequisites
Before you begin, make sure you have the following components installed on your machine:
- Node.js (version 16 or higher): Download https://nodejs.org/en
- npm (included with Node.js).
- PostgreSQL (version 12 or higher): Download https://www.postgresql.org/download/
- pgAdmin4 (graphical interface for managing PostgreSQL): Download https://www.pgadmin.org/download/
- VScode (text editor): Download https://code.visualstudio.com/

Usage locally

Setting Up the Database with PostgreSQL and pgAdmin4:

Creating the Database
Open pgAdmin4 and log in.
In the left pane, right-click on Databases and select Create > Database.
Give the database a name, for example: payment_system.
Click Save.

Creating the Tables
Open the query editor in pgAdmin4.
Copy and paste the following SQL script to create the necessary tables:

CREATE TABLE Payments (
    id SERIAL PRIMARY KEY,
    amount NUMERIC(10, 2) NOT NULL,
    reference VARCHAR(12) NOT NULL,
    bank VARCHAR(100) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    payment_proof TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Run the script by clicking the Run button.

Configure User and Connection
Use the default postgre user and password 123456

Update the .env file in the backend directory with the connection details:

PG_USER=postgres
PG_PASSWORD=123456
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=payment_system
PG_URI=postgres://postgres:123456@localhost:5432/payment_system

By default, the postgre user has the necessary permissions to use the database, however, if you do not have them, follow these steps:

Go to the payment_system database.
Click Properties > Security.
Update the postgre user permissions with read and write permissions.

Setup: Ensure that the PostgreSQL database is running and the connection string is set in the .env file.

Install Dependencies: 

The project is divided into two parts: frontend and backend. Each has its own dependencies.

Install Backend Dependencies
Navigate to the backend directory:
bash
cd backend

Install the necessary dependencies:
bash
npm install

Verify that the dependencies have been installed correctly. The main ones are:
Express: Framework for the server.
pg: PostgreSQL client for Node.js.
multer: Middleware to handle files.
dotenv: To handle environment variables.


In case you want to install individually you must do the following:
Express: Framework to handle routes and HTTP requests.
bash
npm install express

pg: PostgreSQL client to interact with the database.
bash
npm install pg

multer: Middleware to handle file uploads.
bash
npm install multer

dotenv: To handle environment variables.
bash
npm install dotenv


Install Frontend Dependencies
Navigate to the frontend directory:
bash
cd ../frontend

Install the necessary dependencies:
bash
npm install

Verify that the dependencies have been installed correctly. The main ones are:
React: Library to build user interfaces.
Material-UI: Component library for React.
Axios: HTTP client to make requests to the backend.
React Hook Form: To handle forms.

In case you want to install individually you must do the following:

React: Main library to build the user interface.
bash
npm install react react-dom

Material-UI: Component library for React.
bash
npm install @mui/material @emotion/react @emotion/styled

Axios: HTTP client to make requests to the backend.
bash
npm install axios

React Hook Form: To handle forms efficiently.
bash
npm install react-hook-form

Yup: Library for form validation.
bash
npm install yup @hookform/resolvers


Installation Verification:
Verify installed dependencies: After running npm install, verify that the dependencies have been installed correctly by checking the node_modules folder in the corresponding directory (backend or frontend).

Verify installed versions: You can check the versions of the installed dependencies by running:
bash
npm list

Update dependencies: If you need to update the dependencies to their latest versions, you can use:
bash
npm update


Running the Project Locally

Start the Backend
Navigate to the backend directory:
bash
cd backend

Start the server:
bash
node server.js

Verify that the server is running at http://localhost:5000.


Run the Frontend: 

Navigate to the frontend directory:
bash
cd ../frontend

Start the React application:
bash
npm start
Open your browser and go to http://localhost:3000

Access the Application: Open a web browser and navigate to http://localhost:3000 to access the payment form.


Deploy the project on a server.

Instructions will be given on how to deploy the project on the Vercel server. If you want to use another server, please consult the relevant instructions.

Access the Vercel page https://vercel.com/

Log in to your account and if you don't have one, create one

Access the payment-system project from a terminal (for example, vscode)

Install vercel in the project using the command:
npm install -g vercel

Run vercel in the project using the command:
vercel

Then answer the following questions:

Set up and deploy?
Answer: Y

Which scope do I want to deploy to?
Select our vercel user and press enter

(If it asks you to log in to vercel again, select the method by which you had previously logged in and follow the relevant instructions)

Link to existing project?
Answer: N
(We selected this answer because we are deploying a new project)

What's your project name?
Answer: payment-system

In which directory is your code located?
We selected the default answer which is: ./

Want to modify these settings?
Answer: N

At this point vercel generates the URL where the project will be deployed in production

In case you want to make a change to the project and upload it to the server in the preview phase, we write the command:
vercel

Where vercel will generate a URL to view the page with the changes applied in a test environment and in case you want to upload those changes made to production, you write the command:
vercel --prod

