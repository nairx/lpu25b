import express from "express";
const app = express();

const userRouter = express.Router()
const productRouter = express.Router()

app.listen(8080, () => {
  console.log("Server started");
});
app.get("/api/users/show", (req, res) => {
  res.send("Show Users API");
});
app.post("/api/users/register", (req, res) => {
  res.send("Register User API");
});
app.post("/api/users/login", (req, res) => {
  res.send("User Login API");
});
app.get("/api/products/show", (req, res) => {
  res.send("Show Products API");
});
app.delete("/api/products/1", (req, res) => {
  res.send("Delete product API");
});
