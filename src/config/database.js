const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shubhamkjaiswal191_db_user:Njo0VAgr12NjmcI1@dev-tinder.dq2fepj.mongodb.net/devTinder"
  );
};

module.exports = connectDB;

