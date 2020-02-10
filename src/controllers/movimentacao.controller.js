//Importing the model file movimentacao.model
const movimentacao = require("../models/movimentacao.models")


//Controler to list all movimentacoes.
exports.listMovimentacao = (req, res) => {
    movimentacao.find({}, (err, movimentacao) => {
        if (err) {
            res.status(500).send(err);          
        }
        res.status(200).json(movimentacao);
    });
};

//Controler to create new movimentacoes.
exports.createMovimentacao = (req, res) => {
    let newMovimentacao = new movimentacao(req.body);   
    newMovimentacao.save((err, movimentacao) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(movimentacao);
    });
  };
  

//Controler to read new movimentacoes.
exports.readMovimentacao = (req, res, body) => {
    movimentacao.findById(req.params.movimentacaoid, (err, movimentacao) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(movimentacao);
    });
  };
  

//Controler to update movimentacoes.
exports.updateMovimentacao = (req, res) => {
    movimentacao.findByIdAndUpdate(
      { _id: req.params.movimentacaoid },
        req.body,
      { new: true },
      (err, movimentacao) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(movimentacao);
      }
    );
  };

//Controler to delete movimentacoes.  
exports.deleteMovimentacao = (req, res) => {
    movimentacao.deleteOne({ _id: req.params.movimentacaoid }, (err, movimentacao) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).json({ message: "Movimentacao successfully deleted" });
    });
  };