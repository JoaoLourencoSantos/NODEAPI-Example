const UserBusiness = require("../business/UserBusiness");

class UserController {
  async findAll(req, res) {
    const response = await UserBusiness.findAll();
    res.status(response.status).json(response.build());
  }

  async findOne(req, res) {
    const response = await UserBusiness.findOne(req);
    res.status(response.status).json(response.build());
  }

  async store(req, res) {
    const response = await UserBusiness.store(req);
    res.status(response.status).json(response.build());
  }

  async update(req, res) {
    const response = await UserBusiness.update(req);
    res.status(response.status).json(response.build());
  }

  async destroy(req, res) {
    const response = await UserBusiness.destroy(req);
    res.status(response.status).json(response.build());
  }
}

module.exports = new UserController();
