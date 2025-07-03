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
// app.get("/", (req, res) => {
//   res.send(req.msg + " World");
// });

const auth = (req, res) => {
  const name = req.params.name;
  if (name === "john") {
    next();
  } else {
    res.send("Access Denied");
  }
};

app.get("/:name", auth, (req, res) => {
  res.send("Hello World");
});

app.get("/products", logger, (req, res) => {
  res.send(req.msg + " Products");
});
