const web3 = require("web3");
const axios = require("axios");
// const Web3Client = new web3();
const Web3Client = new web3('http://localhost:8545');

axios.defaults.headers.common['x-eq-ag-api-key'] = 'airckrz8tJi8qJEso_W600XSW_xk63o2MwplT2KSTh4';

module.exports = {
    // MICRO_CHAIN_ID: 5069,
    MICRO_CHAIN_ID: 2029,
    USER: {
        ADDRESS: "0xcd486671F7E8A2Cd431647F5c22a6168F4b4933a",
        PRIVATE_KEY: "0xabbcaac53e3e48f881b7f10a809193dd2ff228d6a6581e41908c1008c4633e88"
    },


    CONTRACT_ADDRESS: "0xcddbfe75690143fea5fb8f7d184c46c59768f606",
    WEB3_CLIENT: Web3Client,
    // API_GATEWAY: 'http://43.200.220.233:13010/api/v2'
    API_GATEWAY: 'https://ag.dev.eqhub.eqbr.com/api/v2'
}
