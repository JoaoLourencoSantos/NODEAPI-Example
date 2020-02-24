const Response = require("../dtos/Response");
const { User } = require("../models");

class AuthBusiness {
  async auth(req) {
    const { email, pass } = req.body;

    if (!email || !pass) {
      return new Response(400, "Falta parametros na sua request");
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return new Response(400, "Usuário não encontrado");
    }

    if (!(await user.checkPassword(pass))) {
      return new Response(400, "A senha está incorreta");
    }

    return new Response(200, "Usuário autenticado", {
      user,
      token: User.buildToken(user.id)
    });
  }
}

module.exports = new AuthBusiness();
