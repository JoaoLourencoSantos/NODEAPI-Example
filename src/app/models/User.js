const bcrypt = require("bcryptjs");

module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define(
    "User",
    {
      name: Datatypes.STRING,
      email: Datatypes.STRING,
      password: Datatypes.VIRTUAL,
      password_hash: Datatypes.STRING,
      date_birth: Datatypes.DATE,
      cpf: Datatypes.STRING,
      fk_course: Datatypes.INTEGER
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8);
          }
        }
      }
    }
  );

  User.associate = function(models) {
    User.belongsTo(models.Course, { foreignKey: "fk_course", as: "course" });
  };

  return User;
};
