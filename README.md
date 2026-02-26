# Student CGPA API

## Objective
REST API to manage student CGPA records using in-memory JSON database.

## Routes Implemented

GET /students

GET /students/topper

GET /students/average

GET /students/count

GET /students/:id

GET /students/branch/:branchName


## Sample URL
http://localhost:5000/students

## Run Locally
npm install
npm run dev

## Deployed Link
https://node-js-assignment-1-25a8.onrender.com






# E-Commerce Product API

An in-memory REST API built using Express.js.

## Features

- 3 GET routes
- 1 POST route
- 3 PUT routes
- Proper HTTP status codes
- In-memory JSON storage

## How to Run

1. Clone repository
2. Run `npm install`
3. Run `npm start`
4. Open http://localhost:5000/products

## Routes

### GET /products
Return all products

### GET /products/:id
Return product by ID

### GET /products/category/:categoryName
Filter products by category

### POST /products
Add new product

### PUT /products/:id
Replace full product

### PUT /products/:id/stock
Update stock

### PUT /products/:id/price
Update price
