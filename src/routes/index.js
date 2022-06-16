'use strict';

const homePage = (app) => {
    app.get('/', (req, res) => {
        res.json({
            message: 'home Page boy'
        })
    })
}

const city = (app, searchCep, axios, searchDistance, cepCoords) => {
    app.post('/city', async (req, res) => {
        const { body } = req;
        const city1 = body.city1;
        const city2 = body.city2;
        const cep1 = await searchCep(city1, axios);
        const cep2 = await searchCep(city2, axios);
        const response = await searchDistance(cepCoords, cep1, cep2);
        
        res.json({
            message: 'route of search distance betwen rwo citys', 
            distance: response
        });
    })
}

module.exports = {
    homePage, city
};
