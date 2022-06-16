require('dotenv').config()

const config = {
    port : process.env.PORT, 
    endpoint: process.env.ENDPOINTCEP
}

module.exports = config;
