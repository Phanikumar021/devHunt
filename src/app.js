const express = require("express");

const { auth } = require("../middlewares/adminauth");
const app = express();

app.get("/admin/getData", auth, (req, res, next) => {
  res.send("hello admin, here is the data");
});
app.delete("/admin/deleteUser", auth, (req, res, next) => {
  res.send("hello admin, data deleted!!");
});

app.listen(3000, () => {
  console.log("server listening at port 3000");
});
