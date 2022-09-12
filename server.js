const express = require('express');
const path = require('path');
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/angular-deploy'))
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/angular-deploy(index.html');
})

app.listen(PORT, () => {
    console.log("Servidor iniciado na porta " + PORT);
})