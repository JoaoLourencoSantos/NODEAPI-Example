const { Course } = require("../models");
const Response = require("../dtos/Response");

class CourseController {
  async findAll(req, res) {
    await Course.findAll()
      .then(courses => {
        res.send(new Response(201, "Cursos encontrados!", courses));
      })
      .catch(error => {
        res.send(new Response(500, "Erro ao buscar o cursos!", null));
      });
  }

  async findOne(req, res) {
    const id = req.params.id;
    if (!id) {
      return res.send(
        new Response(404, "Falta o parametro de id do curso", null)
      );
    }
    await Course.findByPk(id)
      .then(course => {
        res.send(new Response(201, "Curso encontrado!", course));
      })
      .catch(error => {
        res.send(new Response(500, "Erro ao buscar o curso!", null));
      });
  }

  async store(req, res) {
    const { name } = req.body;

    const course = await Course.findOne({ where: { name } });

    if (course) {
      return res.send(new Response(404, "O curso já está cadastrado!", null));
    }

    await Course.create(req.body)
      .then(course => {
        res.send(new Response(200, "O curso foi criado com sucesso", course));
      })
      .catch(error => {
        res.json(new Response(500, "O curso não pode ser criado", null));
      });
  }

  async update(req, res) {
    await Course.update(req.body, {
      returning: true,
      where: { id: req.body.id }
    })
      .then(course => {
        res.send(
          new Response(200, "O curso foi atualizado com sucesso", course)
        );
      })
      .catch(error => {
        res.json(new Response(500, "O curso não pode ser atualizado", null));
      });
  }
}

module.exports = new CourseController();
