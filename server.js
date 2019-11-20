const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connecting DataBase
connectDB();

app.get("/", (req, res) => {
  res.send("App running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
