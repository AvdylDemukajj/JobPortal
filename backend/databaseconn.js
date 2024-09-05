const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.DATABASE;

//connect database
const connectDB = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
      resolve();
    } catch (error) {
      console.log("Error: " + error.message);
      reject(error);
    }
  });
};

module.exports = connectDB;
