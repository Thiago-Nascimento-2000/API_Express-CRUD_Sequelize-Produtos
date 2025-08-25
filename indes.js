const express = require("express");
const app = express();

const Produto = require("./models/Produtos");
const bodyParser = require("body-parser");

const PORT = 8081;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/cadastro", (req, res) => {
    res.status(200);

    Produto.create({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    }).then((certo) => {
        res.send("Produto Cadastrado com Sucesso!");
    }).catch((erro) => {
        res.send("Falha ao Cadastrar o Produto!", erro);
    })
});

app.listen(PORT, () => {
    console.log("rodando na porta no link: localhost:", PORT);
});