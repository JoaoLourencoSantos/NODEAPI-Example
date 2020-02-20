module.exports = (sequelize, Datatypes) => {
  const Course = sequelize.define("Course", {
    name: Datatypes.STRING,
    price: Datatypes.DOUBLE
  });
  return Course;
};
