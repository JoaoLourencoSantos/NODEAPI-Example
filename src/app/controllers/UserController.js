const { User } = require("../models");
const Response = require("../dtos/Response");

class UserController {
  async findAll(req, res) {
    const users = await User.findAll();

    return res.json(new Response(201, "Usuários encontrados", users));
  }

  async findOne(req, res) {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.json(new Response(404, "Usuário não encontrado!", null));
    }

    return res.json(new Response(201, "Usuário encontrado", user));
  }

  async store(req, res) {
    const { email, cpf } = req.body;

    const userEmail = await User.findOne({ where: { email } });
    const userCpf = await User.findOne({ where: { cpf } });

    if (userEmail || userCpf) {
      return res.send(new Response(404, "Usuário já está cadastrado!", null));
    }

    return res.send(await User.create(req.body));
  }

  async update(req, res) {
    await User.update(req.body, { returning: true, where: { id: req.body.id } })
      .then(user => {
        res.json(new Response(201, "Usuário atualizado", user));
      })
      .catch(error => {
        res.json(new Response(500, "Usuário não atualizado", null));
      });
  }

  async delete(req, res) {
    await User.destroy({ where: { id: req.params.id } })
      .then(rows => {
        res.json(new Response(201, `Dados deletados ${user}`, rows));
      })
      .catch(error => {
        res.json(new Response(500, "Usuário não deletado", null));
      });
  }
}

module.exports = new UserController();
