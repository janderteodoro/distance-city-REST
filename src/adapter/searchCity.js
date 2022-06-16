'use strict';

async function searchDistance(cepCoords, cep1, cep2){
    try {
        const distance = await cepCoords.getDistEntreCeps(cep1, cep2);
        return distance
    }catch(err) {
        console.error(err);
    }
}

module.exports = searchDistance;
