const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "cadastro",
    "root",
    "142030",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate().then(() => {
    console.log("Banco de Dados Conectado!");
}).catch((erro) => {
    console.log("ERRO: ", erro);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}