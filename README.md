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

Deployed Link
https://node-js-assignment-2-246d.onrender.com



# 📊 State Statistics Management API (3.1)

A complete REST API built using Express.js to manage Indian state statistical data using an in-memory array.

---

## 🚀 Features

- Full REST Implementation
- GET, POST, PUT, PATCH, DELETE routes
- In-memory data storage
- Proper HTTP status codes
- CORS enabled
- JSON-based API
- Server will run at:
http://localhost:5000
- Deployed Link


---

## 📌 API Routes

### GET Routes

- GET `/states` → Get all states
- GET `/states/:id` → Get state by ID
- GET `/states/highest-gdp` → Get state with highest GDP

---

### POST Route

- POST `/states` → Add new state

---

### PUT Routes

- PUT `/states/:id` → Replace entire state
- PUT `/states/:id/budget` → Update budget
- PUT `/states/:id/population` → Update population

---

### PATCH Route

- PATCH `/states/:id` → Partially update state

---

### DELETE Routes

- DELETE `/states/:id` → Delete by ID
- DELETE `/states/low-literacy/:percentage` → Delete states below literacy rate

---

## 📦 Sample Data Structure

```json
{
  "id": 1,
  "name": "Gujarat",
  "population": 63872399,
  "literacyRate": 78.03,
  "annualBudget": 243965,
  "gdp": 21000000
}
