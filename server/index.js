require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload");

const models = require("./models/models");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.SERVER_MAIN_APP_PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

// last in the list!!!
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: "WORKING" });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server starter on port : ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
