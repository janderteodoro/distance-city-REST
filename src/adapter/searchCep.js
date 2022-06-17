'use strict';

async function searchCep(city, axios, endpoint){
    const url = `${endpoint}/${city.state}/${city.name}/${city.street}/json/`

    try {
        const response = await axios.get(url);
        const cep = response.data[0].cep.replace('-', '');
        console.log(response)
        return cep
    } catch(error){
        console.error(error);
    }
}

module.exports = searchCep ;
