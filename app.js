//`npm install express --save` Para instalar o framework express
//`npm install sequelize --save` & `npm install --save mysql2` Para usar o ORM Sequelize
//`npm install express-handlebars --save` Para fazer o uso do handlebars
//Criar pasta views. Dentro do folder "views" coloque todas as views de fato.
//Também dentro da pasta views, criar a pasta "layout" onde se encontra o arquivo "main.handlebars" // o arquivo main serve como um layout para as outras views
//`node app.js` Para rodar o projeto (ou instale o nodemon para rodar o projeto sem ter que reinicializar sempre que alterar algum arquivo)
//`npm install nodemon -g` e `nodemon app.js` para rodar o projeto

//importação do módulo do express
const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine

//defindo rota para "/" (cadastrar)
app.get("/", function(req, res) {
    res.render("index");
});

app.get("/consultar", function(req, res) {
    res.render("consultar");
});

app.get("/cadastrar", function(req, res) {
    res.render("cadastrar");
});

app.get("/atualizar", function(req, res) {
    res.render("atualizar");
});

//definindo o handlebars como mecanismo de modelo e definindo o layout padrão como "main"
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//Criando o servidor web com a porta 8081
app.listen("8081", function(){
    console.log("Servidor ativo! Porta 8081")
})