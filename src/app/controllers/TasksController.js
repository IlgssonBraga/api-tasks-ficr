// const { sequelize } = require("../../config/database");

class TasksController {
  async index(req, res) {
    // try {
    //   await sequelize.authenticate();
    //   console.log("Connection has been established successfully.");
    // } catch (error) {
    //   console.error("Unable to connect to the database:", error);
    // }
    res.send("Todos");
  }
}

module.exports = { TasksController };
