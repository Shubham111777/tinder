const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const newUser = new User(req.body);

  try {
    await newUser.save();
    res.send("user added successfully");
  } catch (err) {
    res.status(400).send("Error while adding user" + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) return res.status(404).send("User not found");
    res.send(users);
  } catch (err) {
    res.status(400).send("Error while getting user" + err.message);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.findOne({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Error while getting feed" + err.message);
  }
});



connectDB()
  .then(() => {
    console.log("Database connection successful");

    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch((err) => {
    console.log("Database connection failed");
  });
