const {Router} = require("express")
const {TodosController} = require("../app/controllers/TodosController")

const todosRoutes = Router()

const todosController = new TodosController()

todosRoutes.get("/", todosController.index)

module.exports = {
    todosRoutes
}