const express = require("express");
const router = express.Router();
const CourseController = require("../app/controllers/CourseController");

router.get("/find", CourseController.findAll);
router.get("/find/:id", CourseController.findOne);
router.post("/store", CourseController.store);
router.put("/update", CourseController.update);
router.delete("/destroy/:id", CourseController.destroy);

module.exports = router;
