const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Routes
const userRoutes = require("./src/routes/Student/student");

mongoose
  .connect("mongodb://localhost:27017/CampusRecruitmentSystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

app.use("/api", userRoutes);

app.listen(4000, () => {
  console.log("App listening to port 4000");
});
