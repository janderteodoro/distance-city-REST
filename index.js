'use strict';

const express = require('express');
const cepCoords = require('coordenadas-do-cep');
const axios = require('axios');
const routes = require('./src/routes')
const searchDistance = require('./src/adapter/searchCity');
const searchCep = require('./src/adapter/searchCep')
const app = express();
const port = 3333;
const bodyParser = require('body-parser');


app.use(bodyParser.json()); 

routes.homePage(app);
routes.city(app, searchCep, axios, searchDistance, cepCoords);

app.listen(port, ()  => {
    console.log(`server runnning in http://localhost:${port}`);
});

