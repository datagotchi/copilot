const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");
// TODO: load an open source LLM package

// const indexRouter = require("./routes/index");
const boilerplatesRouter = require("./routes/boilerplates");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  // TODO: load llm onto the req object
  next();
});

// app.use("/", indexRouter);
app.use("/boilerplates", boilerplatesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.send(err);
});

const server = http.createServer(app);
server.listen(process.env.PORT || 8888);
server.on("listening", () => {
  console.log("Listening on ", server.address());
});

module.exports = app;
