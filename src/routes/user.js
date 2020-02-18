const express = require("express");
const router = express.Router();
const UserController = require("../app/controllers/UserController");
const Response = require("../app/dtos/Response");

router.get("/teste", (req, res) => {
  res.send(new Response(404, "Error", null));
});

router.get("/find/", UserController.findAll);
router.get("/find/:id", UserController.findOne);
router.post("/create", UserController.store);
router.put("/update", UserController.update);
router.delete("/delete/:id", UserController.delete);

module.exports = router;
