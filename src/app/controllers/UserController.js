const { User } = require("../models");
const Response = require("../dtos/Response");

class UserController {
  async store(req, res) {
    const { email, cpf } = req.body;

    const userEmail = await User.findOne({ where: { email } });
    const userCpf = await User.findOne({ where: { cpf } });

    if (userEmail || userCpf) {
      return res.send(new Response(404, "Usuário já está cadastrado!", null));
    }

    return res.send(await User.create(req.body));
  }

  async findOne(req, res) {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.json(new Response(404, "Usuário não encontrado!", null));
    }

    return res.json(new Response(201, "Usuário encontrado", user));
  }

  async findAll(req, res) {
    const users = await User.findAll();

    return res.json(new Response(201, "Usuários encontrados", users));
  }
}

module.exports = new UserController();
