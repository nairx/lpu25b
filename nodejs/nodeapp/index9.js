import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});
const users = [
  {
    name: "John",
    email: "john@email.com",
    password: "1234",
    role: "user",
  },
  {
    name: "Cathy",
    email: "cathy@email.com",
    password: "1234",
    role: "admin",
  },
];
app.use(express.json());
app.post("/login", (req, res) => {
  const { email, password } = req.body();
  const found = users.find(
    (user) => user.email === email && user.password === password
  );
  if (found) {
    
  } else {
    res.status(400).json({ message: "Access Denied" });
  }
});
