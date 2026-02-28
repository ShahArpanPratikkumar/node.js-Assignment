const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let states = [
  { id: 1, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
  { id: 2, name: "Maharashtra", population: 112374333, literacyRate: 82.34, annualBudget: 340000, gdp: 35000000 },
  { id: 3, name: "Kerala", population: 33406061, literacyRate: 94.00, annualBudget: 150000, gdp: 12000000 }
];

// ================= HELPER =================
const findState = (id) => states.find(s => s.id === Number(id));

// ================= GET =================

// Get all states
app.get("/states", (req, res) => {
  res.json(states);
});

// Get by ID
app.get("/states/:id", (req, res) => {
  const state = findState(req.params.id);
  if (!state) return res.status(404).json({ message: "State not found" });
  res.json(state);
});

// Highest GDP
app.get("/states/highest-gdp", (req, res) => {
  const highest = states.reduce((a, b) => a.gdp > b.gdp ? a : b);
  res.json(highest);
});

// ================= POST =================

app.post("/states", (req, res) => {
  const newState = {
    id: states.length + 1,
    ...req.body
  };
  states.push(newState);
  res.status(201).json(newState);
});

// ================= PUT =================

// Replace entire state
app.put("/states/:id", (req, res) => {
  const index = states.findIndex(s => s.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states[index] = { id: Number(req.params.id), ...req.body };
  res.json(states[index]);
});

// Update budget
app.put("/states/:id/budget", (req, res) => {
  const state = findState(req.params.id);
  if (!state) return res.status(404).json({ message: "State not found" });

  state.annualBudget = req.body.annualBudget;
  res.json(state);
});

// Update population
app.put("/states/:id/population", (req, res) => {
  const state = findState(req.params.id);
  if (!state) return res.status(404).json({ message: "State not found" });

  state.population = req.body.population;
  res.json(state);
});

// ================= PATCH =================

app.patch("/states/:id", (req, res) => {
  const state = findState(req.params.id);
  if (!state) return res.status(404).json({ message: "State not found" });

  Object.assign(state, req.body);
  res.json(state);
});

// ================= DELETE =================

// Delete by ID
app.delete("/states/:id", (req, res) => {
  const index = states.findIndex(s => s.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states.splice(index, 1);
  res.status(204).send();
});

// Delete low literacy
app.delete("/states/low-literacy/:percentage", (req, res) => {
  const percentage = Number(req.params.percentage);
  const before = states.length;

  states = states.filter(s => s.literacyRate >= percentage);

  res.json({ deletedCount: before - states.length });
});

// ================= SERVER =================

app.listen(5000, () => {
  console.log("Server running on port 5000");
});