const express = require('express');
const app = express();
const port = 5000;

const aeroporto = require('..js');
const caneta = require('./src/routes/caneta.js');
const moto = require('./src/routes/moto.js');
const refrigerante = require('./src/routes/refrigerante.js');

app.use(express.json());

app.use('/aeroporto', aeroporto);
app.use('/caneta', caneta);
app.use('/moto', moto);
app.use('/refrigerante', refrigerante);

app.listen(port, () => console.log('Servidor escutando na porta ' + port));


app.listen(port, () => console.log("Servidor escutando na porta " + port))