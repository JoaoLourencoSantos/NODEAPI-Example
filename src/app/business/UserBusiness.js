const { User } = require("../models");
const Response = require("../dtos/Response");

class UserBusiness {
  async findAll() {
    try {
      const users = await User.findAll();
      return new Response(200, "Usuários encontrados", users, true);
    } catch (error) {
      return new Response(404, `Usuário não encontrado! ${error}`);
    }
  }

  async findOne(req) {
    try {
      const user = await User.findByPk(req.params.id);
      return new Response(201, "Usuário encontrado", user, true);
    } catch (error) {
      return new Response(404, `Usuário não encontrado! ${error}`);
    }
  }

  async store(req) {
    const { email, cpf } = req.body;

    const userEmail = await User.findOne({ where: { email } });
    const userCpf = await User.findOne({ where: { cpf } });

    if (userEmail || userCpf) {
      return new Response(404, "Usuário já está cadastrado!");
    }

    try {
      const user = await User.create(req.body);
      return new Response(201, "Usuário criado", user, true);
    } catch (error) {
      return new Response(500, `Usuário não atualizado ${error}`);
    }
  }

  async update(req) {
    try {
      const search = await User.findByPk(req.body.id);
      if (!search) {
        return new Response(404, "Usuário não está cadastrado!");
      }

      const user = await User.update(req.body, {
        returning: true,
        where: { id: req.body.id }
      });
      return new Response(201, "Usuário atualizado", user, true);
    } catch (error) {
      return new Response(500, `Usuário não atualizado ${error}`);
    }
  }

  async destroy(req) {
    try {
      const rows = await User.destroy({ where: { id: req.params.id } });
      return new Response(201, `Dados deletados ${rows}`, rows, true);
    } catch (error) {
      return new Response(500, `Usuário não deletado ${error}`);
    }
  }
}

module.exports = new UserBusiness();
