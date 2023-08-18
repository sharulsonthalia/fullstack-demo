const express = require("express");

const app = express();
const PORT = 3005;

//Middleware to format body into JSON
app.use(require("body-parser").json());

//Middleware for logging
app.use(require("morgan")('dev'));

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1> Choo Choo!");
});

app.use("/api", require("./api"));

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is up and running and listening on port ${PORT}`);
  } else {
    console.log(`Something went wrong`);
  }
});
