const mongoose = require("mongoose");

const url = 'mongodb+srv://saurav:saurav@cluster0.lydlfoa.mongodb.net/QuizGame?retryWrites=true&w=majority';

const connectDB=() => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("🗃️  Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection failed", err);
    });
};

module.exports = connectDB;