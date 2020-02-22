const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("./swagger");

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
    this.express.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerConfig)
    );
    this.express.use("/api/user", require("./routes/user"));
    this.express.use("/api/course", require("./routes/course"));
  }
}

module.exports = new App().express;
