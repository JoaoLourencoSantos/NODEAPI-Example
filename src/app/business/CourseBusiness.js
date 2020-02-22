const Response = require("../dtos/Response");
const { Course } = require("../models");
class CourseBusiness {
  async findAll() {
    try {
      const courses = await Course.findAll();
      return new Response(201, "Cursos encontrados!", courses, true);
    } catch (error) {
      return new Response(500, `Erro ao buscar o cursos! ${error}`);
    }
  }

  async findOne(req) {
    const id = req.params.id;
    if (!id) {
      return new Response(404, "Falta o parametro de id do curso");
    }
    try {
      const course = await Course.findByPk(id);
      return new Response(201, "Curso encontrado!", course, true);
    } catch (error) {
      return new Response(500, `Erro ao buscar o curso! ${error}`);
    }
  }

  async store(req) {
    const { name } = req.body;

    const course = await Course.findOne({ where: { name } });

    if (course) {
      return res.send(new Response(404, "O curso já está cadastrado!"));
    }

    try {
      const course = await Course.create(req.body);
      return new Response(203, "O curso foi criado com sucesso", course, true);
    } catch (error) {
      return new Response(500, `O curso não pode ser criado ${error}`);
    }
  }

  async update(req) {
    try {
      const search = await Course.findByPk(req.body.id);
      if (!search) {
        return new Response(404, "O curso não está cadastrado!");
      }

      const course = await Course.update(req.body, {
        returning: true,
        where: { id: req.body.id }
      });
      return new Response(
        200,
        "O curso foi atualizado com sucesso",
        course,
        true
      );
    } catch (error) {
      return new Response(500, `O curso não pode ser atualizado ${error}`);
    }
  }

  async destroy(req) {
    try {
      const rows = await Course.destroy({ where: { id: req.params.id } });
      return new Response(
        200,
        ` ${rows} curso foi deletado com sucesso`,
        null,
        true
      );
    } catch (error) {
      return new Response(500, `O curso não pode ser deletado ${error}`);
    }
  }
}

module.exports = new CourseBusiness();
