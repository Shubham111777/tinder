const express = require("express");
const app = express();

const { adminAuth,userAuth } = require("./middleware/auth.js");

app.use("/admin", adminAuth);

app.get("/user",userAuth, (req, res) => {
  res.send("get all user");
});
app.delete("/user/deleteUser", (req, res) => {
  res.send("user deleted");
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
