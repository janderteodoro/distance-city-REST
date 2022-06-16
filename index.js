'use strict';

const express = require('express');
const cepCoords = require('coordenadas-do-cep');
const axios = require('axios');
const routes = require('./src/routes')
const bodyParser = require('body-parser');
const searchDistance = require('./src/adapter/searchCity');
const searchCep = require('./src/adapter/searchCep')
const config = require('./config');
const app = express();
const { port, endpoint } = config; 


app.use(bodyParser.json()); 

routes.homePage(app);
routes.city(app, searchCep, axios, searchDistance, cepCoords, endpoint);

app.listen(port, ()  => {
    console.log(`server runnning in http://localhost:${port}`);
});

