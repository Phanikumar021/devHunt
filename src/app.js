const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("hello dev!");
});

app.listen(3000, () => {
  console.log("server listening at port 3000");
});
