const express = require('express');
const cepCoords = require('coordenadas-do-cep');
const axios = require('axios');
const searchDistance = require('./src/adapter/searchCity');
const searchCep = require('./src/adapter/searchCep')
const app = express();
const port = 3333;
const bodyParser = require('body-parser');


app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.json({
        message: 'test route home page'
    });
});

app.post('/city', async (req,res) => {
    const { body } = req;
    const city1 = body.city1;
    const city2 = body.city2;
    const cep1 = await searchCep(city1, axios)
    const cep2 = await searchCep(city2, axios)
    const response = await searchDistance(cepCoords, cep1, cep2)
    res.json({
        message: 'route search of city', 
        distancia : response
    })
})


app.listen(port, ()  => {
    console.log(`server runnning in http://localhost:${port}`);
});

