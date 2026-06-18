require("dotenv").config();

const express = require("express");
const cors = require("cors");

const githubRoutes = require("./routes/githubRoutes");

require("./config/db");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/github", githubRoutes);

app.get("/", (req, res) => {
  res.send("GitHub Profile Analyzer API Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
});