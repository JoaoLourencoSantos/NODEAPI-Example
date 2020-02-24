const jwt = require("jsonwebtoken");
const application = require("../../config/application");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ error: "Falta parametros de autenticação na sua request" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, application.secret);

    req.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Token Inválido" });
  }
};
