const express = require("express");
const bodyParser = require("body-parser");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
  }

  routes() {
    this.express.use("/api/user", require("./routes/user"));
  }
}

module.exports = new App().express;
