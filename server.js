/*
var n = 0           Variável 'n'
n = 3
var n = "Lucas"     Variável String
console.log(n)      Mostrar o 'n' no terminal
*/

const { response } = require('express');
const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
app.listen(port);

app.use(express.static('./public'))

//rota principal
app.get('/', (request, response) =>{
    response.sendFile(path.join(__dirname, ('./public/index.html')))
})