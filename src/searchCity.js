const axios = require('axios');
const cepCoords = require('coordenadas-do-cep');

async function searchCep(city){
    const url = `https://viacep.com.br/ws/${city.state}/${city.name}/${city.street}/json/`

    try {
        const response = await axios.get(url);
        const cep = response.data[0].cep.replace('-', '');
        return cep
    } catch(error){
        console.error(error);
    }
}

async function searchDistance(city1, city2){
    try {
        const cep1 = await searchCep(city1);
        const cep2 = await searchCep(city2);
        const distance = await cepCoords.getDistEntreCeps(cep1, cep2);
        return distance
    }catch(err) {
        console.error(err);
    }
}

module.exports = searchDistance;
