const AuthBusiness = require("../business/AuthBusiness");

class AuthController {
  async auth(req, res) {
    const response = await AuthBusiness.auth(req);
    res.status(response.status).json(response.build());
  }
}

module.exports = new AuthController();
