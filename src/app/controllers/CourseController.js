const { Course } = require("../models");
const Response = require("../dtos/Response");
const CourseBusiness = require("../business/CourseBusiness");

class CourseController {
  async findAll(req, res) {
    const response = await CourseBusiness.findAll();
    res.status(response.status).json(response.build());
  }

  async findOne(req, res) {
    const response = await CourseBusiness.findOne(req);
    res.status(response.status).json(response.build());
  }

  async store(req, res) {
    const response = await CourseBusiness.store(req);
    res.status(response.status).json(response.build());
  }

  async update(req, res) {
    const response = await CourseBusiness.update(req);
    res.status(response.status).json(response.build());
  }

  async destroy(req, res) {
    const response = await CourseBusiness.destroy(req);
    res.status(response.status).json(response.build());
  }
}

module.exports = new CourseController();
