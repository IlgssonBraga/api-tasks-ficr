const { sequelize } = require("../../config/sequelize");

class TodosController {
  async index(req, res) {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
    res.send("Todos");
  }
}

module.exports = { TodosController };
