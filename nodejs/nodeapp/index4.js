import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});
const logger = (req, res, next) => {
  req.msg = "Hello";
  next();
};
// app.use(logger);
app.get("/", (req, res) => {
  res.send(req.msg + " World");
});
app.get("/products", logger, (req, res) => {
  res.send(req.msg + " Products");
});
