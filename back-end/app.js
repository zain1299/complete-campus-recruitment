const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const authRoutes = require("./src/routes/auth");
const jobs = require("./src/routes/jobs");

mongoose
  .connect("mongodb://localhost:27017/CampusRecruitmentSystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", jobs);

app.listen(4000, () => {
  console.log("App listening to port 4000");
});

// https://www.youtube.com/watch?v=0DZdYLQF2JI
