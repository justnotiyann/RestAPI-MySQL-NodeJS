const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const ejsLayout = require("express-ejs-layouts");
require("dotenv").config();

const app = express();
app.listen(process.env.PORT, () => {
  console.log("server berjalan");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(ejsLayout);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const usersRouter = require("./routes/Users");
const indexRouter = require("./routes/index");
app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
