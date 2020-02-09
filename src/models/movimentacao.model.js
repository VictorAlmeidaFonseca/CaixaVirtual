//Importing mongose for create Schema
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


//Object for model movimentacao on Schema.
const movimentacaoSchema = new Schema ({
    saldoTotal : Number,
    movimentacoes : [
        {
            data: Date,
            id: String,
            categoria: {
                id: String,
                name: String
            },
            tipo: String,
            valor: Number,
            descricao: String

        }
    ]
});

module.exports = mongoose.model("Movimentacao", movimentacaoSchema);