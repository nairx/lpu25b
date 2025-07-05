import express from 'express'
const Router = express.Router()
Router.get("/show", (req, res) => {
  res.send("Show Users API");
});
Router.post("/register", (req, res) => {
  res.send("Register User API");
});
Router.post("/login", (req, res) => {
  res.send("User Login API");
});
export default Router