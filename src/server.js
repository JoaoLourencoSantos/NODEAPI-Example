const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("./swagger");
const authMiddleware = require("./app/middlewares/auth");

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
    this.express.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerConfig)
    );
    this.express.use("/api", authMiddleware);
  }

  routes() {
    this.express.use("/api/user", require("./routes/user"));
    this.express.use("/api/course", require("./routes/course"));
    this.express.use("/api/session", require("./routes/auth"));
  }
}

module.exports = new App().express;
