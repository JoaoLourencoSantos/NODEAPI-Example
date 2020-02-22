const express = require("express");
const router = express.Router();
const UserController = require("../app/controllers/UserController");

router.get("/find/", UserController.findAll);
router.get("/find/:id", UserController.findOne);
router.post("/store", UserController.store);
router.put("/update", UserController.update);
router.delete("/destroy/:id", UserController.destroy);

module.exports = router;
