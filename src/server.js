const express = require("express")
const {routes} = require('./routes/index.routes')
require("./database");

const app = express()

const PORT = 3333

app.use(routes)

app.listen(process.env.PORT || PORT)