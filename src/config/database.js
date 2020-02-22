module.exports = {
  dialect: "postgres",
  host: "192.168.0.104", //"10.224.68.73",
  username: "postgres",
  password: "postgres",
  database: "Teste",
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
