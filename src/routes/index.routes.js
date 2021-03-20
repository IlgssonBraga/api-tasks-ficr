const {Router, response} = require("express")
const {todosRoutes} = require("./todos.routes")

const routes = Router()

routes.use("/todos", todosRoutes)

routes.get("/", (req,res) => res.send('Main page'))

module.exports = {
    routes
}