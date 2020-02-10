//Import the express module.
const express = require('express');
const app = express();

//Importing bode-parser.
const bodyParser = require("body-parser");

//Importing the controllers
const movimentacoesController = require("./src/controllers/movimentacao.controller")

//Db instance connection.
require("./src/models/db.connection");

//Including body-parser in app.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Routes(endpoints).
app
    .route("/movimentacoes")
    .get(movimentacoesController.listMovimentacao)
    .post(movimentacoesController.createMovimentacao)

app
    .route("/movimentacoes/:movimentacaoid")
    .get(movimentacoesController.readMovimentacao)
    .put(movimentacoesController.updateMovimentacao)
    .delete(movimentacoesController.deleteMovimentacao)


app.listen(3000, function() {
    console.log('Server is running on port 3000')
})

app.get('/', function (req, res) {
    res.send('The API is working!');
  });



