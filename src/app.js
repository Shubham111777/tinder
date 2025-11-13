const express = require("express");
const app = express();

app.use("/user",[ (req, res,next) => {
  console.log("route111")
  next();
  res.send("route1");
},(req, res)=>{
console.log("route2222")
  res.send("route2");


}]);

app.listen(8080 , () => {
  console.log("Server is running on port 8080");
});
