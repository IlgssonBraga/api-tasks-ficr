class TodosController {
    async index(req, res){
        res.send('Todos')
    }
}

module.exports = {TodosController}