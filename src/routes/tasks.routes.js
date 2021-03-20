const { Router } = require("express");
const { TasksController } = require("../app/controllers/TasksController");

const tasksRoutes = Router();

const tasksController = new TasksController();

tasksRoutes.get("/", tasksController.index);

module.exports = {
  tasksRoutes,
};
