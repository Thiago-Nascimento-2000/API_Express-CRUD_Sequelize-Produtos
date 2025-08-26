import Produto from './models/Produtos.js';

import express from 'express';
const app = express();

import bodyParser from 'body-parser';

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

app.get("/produtos", (req, res) => {
    res.status(200);
    Produto.findAll().then( (produtos) => {
        res.send({produtos});
    }).catch( (erro) => {
        res.send("Erro ao buscar os dados no banco ", erro);
    });
});

app.patch("/atualizar/:id", (req, res) => {
    Produto.update({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao},
        {where: {"id": req.params.id}}
    ).then( () => {
        res.send("Sucesso em atualizar o produto!");
    }).catch((erro) => {
        res.send("Falhou na atualização das informações do produto!", erro);
    });
});

app.delete("/deletar/:id", (req, res) => {
    Produto.destroy({where: {"id": req.params.id}}).then( () => {
        res.send("Produto deletado!");
    }).catch( (erro) => {
        res.send("Erro ao deletar o produto!", erro);
    });
});

app.listen(PORT, () => {
    console.log("rodando na porta no link: localhost:", PORT);
});