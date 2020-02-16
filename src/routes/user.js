const express = require("express");
const router = express.Router();
const UserController = require("../app/controllers/UserController");
const Response = require("../app/dtos/Response");

router.get("/teste", (req, res) => {
  res.send(new Response(404, "Error", null));
});

router.post("/create", UserController.store);
router.get("/find/:id", UserController.findOne);
router.get("/find/", UserController.findAll);

module.exports = router;
