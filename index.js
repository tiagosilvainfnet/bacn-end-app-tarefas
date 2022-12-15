// Add Express
const express = require("express");
const db = require('./db.js');

const AuthController = require("./controllers/AuthController");
const UserController = require('./controllers/UserController');

// Initialize Express
const app = express();

const authCtrl = new AuthController();
const userCtrl = new UserController();

// Create GET request
app.get("/", (req, res) => {
  res.send("App is running");
});
router.post("/login", async (req, res) => {
  const result = await authCtrl.login(req.body.userEmail, req.body.password);
  res.statusCode = result.status;
  res.send(result.result);
});

router.post("/register", async (req, res) => {
  const result = await userCtrl.createUser(req.body);
  res.statusCode = result.status;
  res.send(result.result);
})

router.get("/user:id", async (req, res) => {
  const result = await userCtrl.getUser(req.params.id);
  res.statusCode = result.status;
  res.send(result.result);
})
router.put("/user:id", async (req, res) => {
  const result = await userCtrl.updateUser(req.params.id, req.body);
  res.statusCode = result.status;
  res.send(result.result);
})

app.get("/task", (req, res) => {
  res.send("Express on Vercel");
});
app.post("/task", (req, res) => {
  res.send("Express on Vercel");
});
app.get("/task/:id", (req, res) => {
  res.send("Express on Vercel");
});
app.patch("/task/:id", (req, res) => {
  res.send("Express on Vercel");
});
app.delete("/task/:id", (req, res) => {
  res.send("Express on Vercel");
});

db.sync(() => console.log("Banco de dados rodando"));
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;