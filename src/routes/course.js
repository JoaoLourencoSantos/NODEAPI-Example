const express = require("express");
const router = express.Router();
const CourseController = require("../app/controllers/CourseController");
const Response = require("../app/dtos/Response");

router.get("/teste", (req, res) => {
  res.send(new Response(404, "Error", null));
});

router.get("/find", CourseController.findAll);
router.get("/find/:id", CourseController.findOne);
router.post("/store", CourseController.store);
router.put("/update", CourseController.update);
router.delete("/destroy/:id", CourseController.destroy);

module.exports = router;
