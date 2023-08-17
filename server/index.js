const express = require("express");

const app = express();
const PORT = 3005;

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1> Choo Choo!');
});

app.use('/api', require("./api"));

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is up and running and listening on port ${PORT}`);
  } else {
    console.log(`Something went wrong`);
  }
});
