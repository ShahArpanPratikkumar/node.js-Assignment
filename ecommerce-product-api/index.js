const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// In-memory data
let products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 799, stock: 25, rating: 4.3 },
  { id: 2, name: "Running Shoes", category: "Footwear", price: 2499, stock: 40, rating: 4.5 },
  { id: 3, name: "Laptop Stand", category: "Accessories", price: 999, stock: 30, rating: 4.2 },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 4999, stock: 12, rating: 4.4 },
  { id: 5, name: "Backpack", category: "Fashion", price: 1599, stock: 50, rating: 4.1 }
];


// ================= GET =================

// 1. Get all products
app.get("/products", (req, res) => {
  res.status(200).json(products);
});

// 2. Get product by id
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

// 3. Get products by category
app.get("/products/category/:category", (req, res) => {
  const category = req.params.category.toLowerCase();

  const result = products.filter(p =>
    p.category.toLowerCase() === category
  );

  res.status(200).json(result);
});


// ================= POST =================

// 4. Add new product
app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});


// ================= PUT =================

// 5. Replace full product
app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = { id, ...req.body };

  res.status(200).json(products[index]);
});

// 6. Update stock only
app.put("/products/:id/stock", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.stock = req.body.stock;

  res.status(200).json(product);
});

// 7. Update price only
app.put("/products/:id/price", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.price = req.body.price;

  res.status(200).json(product);
});


// ================= SERVER =================
app.listen(5000, () => {
  console.log("Server running on port 5000");
});