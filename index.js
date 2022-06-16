const express = require('express');
const searchDistance = require('./src/searchCity');
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
    const response = await searchDistance(city1, city2)
    res.json({
        message: 'route search of city', 
        distancia : response
    })
})


app.listen(port, ()  => {
    console.log(`server runnning in http://localhost:${port}`);
});

