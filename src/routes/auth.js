const express = require("express");
const router = express.Router();
const AuthController = require("../app/controllers/AuthController");

router.post("/auth", AuthController.auth);

module.exports = router;
